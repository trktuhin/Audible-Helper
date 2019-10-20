using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace AudibleHelper.API.Dtos
{
    public class DeleteDto
    {
        [Required]
        public DateTime DateTo { get; set; }
    }
}