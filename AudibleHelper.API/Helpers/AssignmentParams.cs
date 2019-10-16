using System;

namespace AudibleHelper.API.Helpers
{
    public class AssignmentParams
    {
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; }=1;
        private int pageSize = 10;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize)? MaxPageSize:value; }
        }

        public int AssignedToId { get; set; }=0;
        public string BookAsin { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public string Country { get; set; }
        public int SessionId { get; set; }
        public bool IsCompleted { get; set; }
    }
}