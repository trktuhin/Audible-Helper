using System;

namespace AudibleHelper.API.Models
{
    public class Review
    {
        public string PenName { get; set; }
        public DateTime ReviewDate { get; set; }
        public string BookAsin { get; set; }
        public int ReviewerId { get; set; }
        public string ReviewTitle { get; set; }
        public string Country { get; set; }
    }
}