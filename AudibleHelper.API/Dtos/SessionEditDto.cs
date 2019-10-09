using System;

namespace AudibleHelper.API.Dtos
{
    public class SessionEditDto
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Name { get; set; }
    }
}