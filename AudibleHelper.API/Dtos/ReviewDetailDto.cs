using System;

namespace AudibleHelper.API.Dtos
{
    public class ReviewDetailDto
    {
            public string PenName { get; set; }
            public DateTime ReviewDate { get; set; }
            public string BookAsin { get; set; }
            public int ReviewerId { get; set; }
            public string Country { get; set; }
    }
}