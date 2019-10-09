using System;

namespace AudibleHelper.API.Models
{
    public class Session
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Name { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public Session()
        {
            CreatedOn = DateTime.Now;
        }
    }
}