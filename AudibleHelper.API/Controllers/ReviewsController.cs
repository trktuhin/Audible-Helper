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
using AudibleHelper.API.Helpers;
using AudibleHelper.API.Models;
using AutoMapper;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;

namespace AudibleHelper.API.Controllers
{
    [ServiceFilter(typeof(LoggedUserActivity))]
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IAudibleRepository _repo;
        private readonly UserManager<User> _userManager;

        private readonly IMapper _mapper;
        public ReviewsController(IAudibleRepository repo, IMapper mapper,UserManager<User> userManager)
        {
            _mapper = mapper;
            _repo = repo;
            _userManager = userManager;
        }

        [HttpPost("GetReviews")]
        public async Task<IActionResult> GetReviews(ReviewParams revParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            if(revParams.SessionId !=0 && revParams.SessionId != -1)
            {
                var session = await _repo.GetSession(revParams.SessionId);
                if(session != null)
                {
                    revParams.DateFrom = session.StartDate;
                    revParams.DateTo = session.EndDate;
                }
            }
            if(revParams.ReviewerId == 0)
            {
                revParams.ReviewerId = currentUserId;
            }
            var reviews = await _repo.GetReviews(revParams);
            
            Response.AddPagination(reviews.CurrentPage,reviews.PageSize,reviews.TotalCount,reviews.TotalPages);
            return Ok(reviews);
        }
        [HttpPost("AddReviewByDate")]
        public async Task<IActionResult> AddReviewsByDate(ReviewForCreationDto dto)
        {
            int reviewerId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            List<Review> reviewsToAdd = new List<Review>();
            int count = 0;
            try
            {
                var reviewsFromWeb = GetReviewsFromWeb(dto, reviewerId);
                reviewsFromWeb = reviewsFromWeb.Where(rev => rev.ReviewDate == dto.MinimumDate).ToList();
                foreach(var review in reviewsFromWeb)
                {
                    var revInDb = await _repo.GetReview(review.PenName,review.BookAsin,review.ReviewDate,review.ReviewTitle);
                    if(revInDb==null)
                    {
                        reviewsToAdd.Add(review);
                        count++;
                    }
                }
                _repo.AddMultiple(reviewsToAdd);
                if(await _repo.SaveAll())
                {
                    return Ok(count);
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
            return BadRequest("Could not add reviews");
        }

        [HttpPost]
        public async Task<IActionResult> AddReviews([FromForm]ReviewForCreationDto dto)
        {
            int reviewerId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            int count = 0;
            try
            {
                var dt = GetTableFromExcel(dto.File);
                var minDate = dt.Compute("MIN(Date)",null).ToString();
                // dto.MinimumDate = DateTime.ParseExact(minDate, "MM/dd/yyyy", CultureInfo.InvariantCulture);
                dto.MinimumDate = DateTime.Parse(minDate);
                var reviewsFromWeb = GetReviewsFromWeb(dto, reviewerId);
                foreach (var review in reviewsFromWeb)
                {
                    var dataRow = dt.Select("Name = '"+ review.PenName +"'").FirstOrDefault();
                    if(dataRow!=null)
                    {
                        var date = dataRow["Date"].ToString();
                        var reviewDate = DateTime.Parse(date);
                        if(reviewDate == review.ReviewDate)
                        {
                            var revInDb = await _repo.GetReview(review.PenName,review.BookAsin,review.ReviewDate,review.ReviewTitle);
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
                return BadRequest(ex);
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
                string url="";
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
                        reviewDate = DateTime.Parse(date);
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
                    
                } catch(Exception)
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
                    ////checking if the cell value is whitespace
                    var emtyRow = false;
                    foreach (var cell in wsRow)
                    {
                        var name = cell.Text;
                        if(string.IsNullOrWhiteSpace(name))
                            emtyRow = true;
                            break;
                    }
                    if(emtyRow)
                        break;

                    
                    DataRow row = dt.Rows.Add();
                    foreach (var cell in wsRow)
                    {
                        row[cell.Start.Column - 1] = cell.Value;
                    }
                }
            }
            return dt;
        }
    
        [HttpPost("DeleteReview")]
        public async Task<IActionResult> DeleteReview(ReviewDetailDto dto)
        {
            int reviewerId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var user = await _repo.GetUser(reviewerId);
            var isAdmin = await _userManager.IsInRoleAsync(user, "Admin");
            var reviewInDb = await _repo.GetReview(dto.PenName, dto.BookAsin, dto.ReviewDate, dto.ReviewTitle);
            if(reviewerId != reviewInDb.ReviewerId && !isAdmin)
            {
                return Unauthorized();
            }
            _repo.Delete(reviewInDb);
            if(await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not delete the review");
        }
        
        [HttpPost("DeleteRange")]
        public async Task<IActionResult> DeleteRange(ReviewParams revParams)
        {
            int reviewerId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var user = await _repo.GetUser(reviewerId);
            var isAdmin = await _userManager.IsInRoleAsync(user, "Admin");
            if(!isAdmin)
            {
                return Unauthorized();
            }
            var reviews = await _repo.GetReviewsForDelete(revParams);
            _repo.RemoveMultiple(reviews);
            if(await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not delete Reviews");
        }

    }
}