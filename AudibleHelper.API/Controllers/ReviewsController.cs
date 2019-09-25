using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using AudibleHelper.API.Data;
using AudibleHelper.API.Dtos;
using AudibleHelper.API.Models;
using AutoMapper;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;

namespace AudibleHelper.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IAudibleRepository _repo;
        private readonly IMapper _mapper;
        public ReviewsController(IAudibleRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpPost]
        public async Task<IActionResult> AddReview([FromForm]ReviewForCreationDto dto)
        {
            int reviewerId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            int count = 0;
            try
            {
                var dt = GetTableFromExcel(dto.File);
                var minDate = dt.Compute("MIN(Date)",null).ToString();
                dto.MinimumDate = DateTime.ParseExact(minDate, "dd-MM-yyyy", CultureInfo.InvariantCulture);
                var reviewsFromWeb = GetReviewsFromWeb(dto, reviewerId);
                foreach (var review in reviewsFromWeb)
                {
                    var dataRow = dt.Select("Name = '"+ review.PenName +"'").FirstOrDefault();
                    if(dataRow!=null)
                    {
                        var date = dataRow["Date"].ToString();
                        var reviewDate = DateTime.ParseExact(date, "dd-MM-yyyy", CultureInfo.InvariantCulture);
                        if(reviewDate == review.ReviewDate)
                        {
                            var revInDb = await _repo.GetReview(review.PenName,review.BookAsin,review.ReviewDate);
                            if(revInDb==null)
                            {
                                _repo.Add(review);
                                count++;
                            }
                        }
                    }
                }
                await _repo.SaveAll();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return Ok(count);
        }

        private List<Review> GetReviewsFromWeb(ReviewForCreationDto dto, int reviewerId)
        {
            List<Review> revList = new List<Review>();
            int nextPageNo = 0;
            bool minDate = false;

            while (nextPageNo != -1)
            {
                Review review;
                string url;
                string nextPageId;
                if (dto.Country.ToLower() == "us")
                {
                    url = "https://www.audible.com/pd/reviews?country=US&asin="
                            + dto.BookAsin + "&sort=MostRecent&page=" + nextPageNo;
                    nextPageId = "nextReviewsPageNumberUS";
                }
                else
                {
                    url = "https://www.audible.co.uk/pd/reviews?country=UK&asin="
                            + dto.BookAsin + "&sort=MostRecent&page=" + nextPageNo;
                    nextPageId = "nextReviewsPageNumberUK";

                }
                var web = new HtmlWeb();
                var doc = web.Load(url);
                var listItems = doc.DocumentNode.SelectNodes("//li/a[contains(@class, 'bc-color-link')]");
                foreach (var node in listItems)
                {
                    var penName = node.InnerText;
                    var dateNode = node.ParentNode.ParentNode.Descendants("li")
                                  .Where(d => d.Attributes["class"].Value.Contains("bc-color-secondary"))
                                  .FirstOrDefault();
                    var date = Regex.Replace(dateNode.InnerText, @"\s+", string.Empty);
                    DateTime reviewDate;
                    if (dto.Country.ToLower() == "us")
                    {
                        reviewDate = DateTime.ParseExact(date, "MM-dd-yy", CultureInfo.InvariantCulture);
                    }
                    else
                    {
                        reviewDate = DateTime.ParseExact(date, "dd-MM-yy", CultureInfo.InvariantCulture);
                    }
                    //checking minimum date
                    if (dto.MinimumDate > reviewDate)
                    {
                        minDate = true;
                        break;
                    }
                    var rawReview = dateNode.ParentNode.ParentNode.ParentNode.ParentNode.ParentNode.NextSibling.NextSibling
                                    .SelectSingleNode("h4");
                    string reviewTitle = "";
                    if (rawReview != null)
                    {
                        reviewTitle = rawReview.InnerText.Trim();
                    }
                    //creating new review
                    if (penName.ToLower() != "anonymous user")
                    {
                        review = new Review();
                        review.PenName = penName;
                        review.ReviewDate = reviewDate;
                        review.ReviewTitle = reviewTitle;
                        review.BookAsin = dto.BookAsin;
                        review.Country = dto.Country;
                        review.ReviewerId = reviewerId;
                        revList.Add(review);
                    }
                }
                string nextPage="0";
                try
                {
                    nextPage = doc.GetElementbyId(nextPageId).GetAttributeValue("value", "");
                    nextPageNo = Convert.ToInt32(nextPage);
                    
                } catch(Exception ex)
                {
                    nextPageNo = -1;
                }
                if (minDate)
                {
                    nextPageNo = -1;
                }
            }
            return revList;
        }

        private DataTable GetTableFromExcel(IFormFile file)
        {
            DataTable dt = new DataTable();
            using (var excelPack = new ExcelPackage())
            {
                //load excel stream
                using (var stream = file.OpenReadStream())
                {
                    excelPack.Load(stream);
                }
                var ws = excelPack.Workbook.Worksheets[0];
                bool hasHeader = true;
                foreach (var firstRowCell in ws.Cells[1, 1, 1, ws.Dimension.End.Column])
                {
                    dt.Columns.Add(hasHeader ? firstRowCell.Text : string.Format("Column {0}", firstRowCell.Start.Column));
                }
                var startRow = hasHeader ? 2 : 1;
                for (int rowNum = startRow; rowNum <= ws.Dimension.End.Row; rowNum++)
                {
                    var wsRow = ws.Cells[rowNum, 1, rowNum, ws.Dimension.End.Column];
                    DataRow row = dt.Rows.Add();
                    foreach (var cell in wsRow)
                    {
                        row[cell.Start.Column - 1] = cell.Text;
                    }
                }
            }
            return dt;
        }
    }
}