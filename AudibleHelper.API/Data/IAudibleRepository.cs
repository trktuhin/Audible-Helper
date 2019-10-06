using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AudibleHelper.API.Helpers;
using AudibleHelper.API.Models;

namespace AudibleHelper.API.Data
{
    public interface IAudibleRepository
    {
         void Add<T>(T entity) where T:class;
         void Delete<T>(T entity) where T:class;
         Task<bool> SaveAll();
         Task<PagedList<User>> GetUsers(UserParams userParams);
         Task<PagedList<Review>> GetReviews(ReviewParams revParams);
         Task<User> GetUser(int id);
         Task<Photo> GetPhoto(int id);
         Task<Photo> GetMainPhoto(int userId);
         Task<Message> GetMessage(int id);
         Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams);
         Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId);
         Task<Review> GetReview(string penName, string bookAsin, DateTime reviewDate);
    }
}