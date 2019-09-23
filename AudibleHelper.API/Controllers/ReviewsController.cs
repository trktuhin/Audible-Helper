using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Text.RegularExpressions;
using AudibleHelper.API.Data;
using AudibleHelper.API.Dtos;
using AudibleHelper.API.Models;
using AutoMapper;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult AddReview(ReviewForCreationDto dto)
        {
            int reviewerId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            //should get from excel
            dto.MinimumDate = DateTime.Now.AddDays(-1);
            try
            {
                var reviewsFromWeb = GetReviewsFromWeb(dto, reviewerId);
                foreach(var review in reviewsFromWeb)
                {
                    //check if review is okay and not in the database already
                    _repo.Add(review);
                }
                _repo.SaveAll();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return Ok();
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
                var nextPage = doc.GetElementbyId(nextPageId).GetAttributeValue("value", "");
                if (nextPage == null || minDate)
                {
                    nextPageNo = -1;
                }
                else
                {
                    nextPageNo = Convert.ToInt32(nextPage);
                }
            }
            return revList;
        }
    }
}