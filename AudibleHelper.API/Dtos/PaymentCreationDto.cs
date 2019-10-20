using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace AudibleHelper.API.Dtos
{
    public class PaymentCreationDto
    {
        [Required]
        public int MemberId { get; set; }
        [Required]
        public float TotalReviews { get; set; }
        [Required]
        public float TotalAmountInTaka { get; set; }
        [Required]
        public int SessionId { get; set; }
    }
}