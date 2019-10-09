namespace AudibleHelper.API.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public int MemberId { get; set; }
        public float TotalReviews { get; set; }
        public float TotalAmountInTaka { get; set; }
        public Session Session { get; set; }
        public int SessionId { get; set; }
        public bool IsReceived { get; set; }
    }
}