using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace AudibleHelper.API.Dtos
{
    public class AssignmentCreationDto
    {
        [Required]
        public string BookAsin { get; set; }
        [Required]
        public int AssignedToId { get; set; }
        [Required]
        public int TotalCodes { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public int StartingRating { get; set; }
    }
}