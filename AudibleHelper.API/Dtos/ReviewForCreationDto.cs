using System;
using Microsoft.AspNetCore.Http;

namespace AudibleHelper.API.Dtos
{
    public class ReviewForCreationDto
    {
        public string PenName { get; set; }
        public DateTime ReviewDate { get; set; }
        public string BookAsin { get; set; }
        public string Country { get; set; }
        public string ReviewTitle { get; set; }
        public DateTime MinimumDate { get; set; }
        public IFormFile File { get; set; }
    }
}