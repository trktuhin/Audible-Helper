using System;

namespace AudibleHelper.API.Dtos
{
    public class SessionForCreationDto
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Name { get; set; }
        public string CreatedBy { get; set; }
    }
}