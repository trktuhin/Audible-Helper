using System;

namespace AudibleHelper.API.Models
{
    public class Assignment
    {
        public int Id { get; set; }
        public string BookAsin { get; set; }
        public int TotalCodes { get; set; }
        public DateTime AssignedDate { get; set;}
        public User AssignedTo { get; set; }
        public int AssignedToId { get; set; }
        public bool IsDeleted { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public string LastModifiedBy { get; set; }
        public DateTime LastModifiedOn { get; set; }
        public string Country { get; set; }
        public int StartingRating { get; set; }
        public bool IsCompleted { get; set; }

    }
}