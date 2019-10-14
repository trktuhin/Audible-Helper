using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AudibleHelper.API.Helpers;
using AudibleHelper.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AudibleHelper.API.Data
{
    public class AudibleRepository : IAudibleRepository
    {
        private readonly DataContext _context;
        public AudibleRepository(DataContext context)
        {
            _context = context;

        }

        public void AddMultiple<T>(IEnumerable<T> entities) where T : class
        {
            _context.AddRange(entities);
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Photo> GetMainPhoto(int userId)
        {
            return await _context.Photos.Where(p => p.UserId == userId).FirstOrDefaultAsync(p => p.IsMain);
        }

        public async Task<Photo> GetPhoto(int id)
        {
            var photo = await _context.Photos.FirstOrDefaultAsync(p => p.Id == id);
            return photo;
        }

        public async Task<User> GetUser(int id)
        {
            var user=await _context.Users.Include(u => u.Photos).FirstOrDefaultAsync(u => u.Id==id);
            return user;
        }

        public async Task<PagedList<User>> GetUsers(UserParams userParams)
        {
            var users = _context.Users.Include(u => u.Photos)
            .OrderByDescending(u => u.LastActive).AsQueryable();
            users = users.Where(u => u.Id != userParams.UserId);
            if(userParams.MinAge !=18 || userParams.MaxAge != 99)
            {
                var minDob = DateTime.Today.AddYears(-userParams.MaxAge-1);
                var maxDob = DateTime.Today.AddYears(-userParams.MinAge);
                users = users.Where(u => u.DateOfBirth >= minDob && u.DateOfBirth <= maxDob);
            }
            if(userParams.Gender.ToLower() != "all")
            {
                users = users.Where(u => u.Gender == userParams.Gender);
            }
            if(!string.IsNullOrWhiteSpace(userParams.KnownAs))
            {
                users = users.Where(u => u.KnownAs.ToLower().Contains(userParams.KnownAs.ToLower()));
            }
            if(!string.IsNullOrWhiteSpace(userParams.OrderBy))
            {
                switch(userParams.OrderBy)
                {
                    case "created":
                        users = users.OrderByDescending(u => u.Created);
                        break;
                    default:
                        users = users.OrderByDescending(u => u.LastActive);
                        break;
                }
            }
            return await PagedList<User>.CreateAsync(users, userParams.PageNumber, userParams.PageSize);
        }

        public async Task<List<User>> GetAllUsers()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }
        public async Task<PagedList<Review>> GetReviews(ReviewParams revParams)
        {
            var reviews = _context.Reviews.Include(rev => rev.Reviewer).AsQueryable();
            if(revParams.ReviewerId != 0 && revParams.ReviewerId != -1)
            {
                reviews = reviews.Where(rev => rev.ReviewerId == revParams.ReviewerId);
            }
            if(revParams.DateFrom != null && revParams.DateFrom != DateTime.MinValue)
            {
                reviews = reviews.Where(rev => rev.ReviewDate >= revParams.DateFrom);
            }
            if(revParams.DateTo != null && revParams.DateTo != DateTime.MinValue)
            {
                reviews = reviews.Where(rev => rev.ReviewDate <= revParams.DateTo);
            }
            if(!string.IsNullOrWhiteSpace(revParams.BookAsin))
            {
                reviews = reviews.Where(rev => rev.BookAsin == revParams.BookAsin);
            }
            if(!string.IsNullOrWhiteSpace(revParams.Country))
            {
                reviews = reviews.Where(rev => rev.Country.ToLower() == revParams.Country.ToLower());
            }
            if(!string.IsNullOrWhiteSpace(revParams.PenName))
            {
                reviews = reviews.Where(rev => rev.PenName.ToLower().Contains(revParams.PenName.ToLower()));
            }
            reviews = reviews.OrderByDescending(rev => rev.ReviewDate);
            return await PagedList<Review>.CreateAsync(reviews, revParams.PageNumber, revParams.PageSize);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Message> GetMessage(int id)
        {
            return await _context.Messages.FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams)
        {
            var messages = _context.Messages
                .Include(m => m.Sender).ThenInclude(s => s.Photos)
                .Include(m => m.Recipient).ThenInclude(r => r.Photos)
                .AsQueryable();
            switch(messageParams.MessageContainer)
            {
                case "Inbox":
                    messages = messages.Where(m => m.RecipientId == messageParams.UserId
                    && m.RecipientDeleted == false);
                    break;
                case "Outbox":
                    messages = messages.Where(m => m.SenderId == messageParams.UserId
                    && m.SenderDeleted == false);
                    break;
                default:
                    messages = messages.Where(m => m.RecipientId == messageParams.UserId 
                    && m.IsRead == false && m.RecipientDeleted == false);
                    break;
            }
            messages = messages.OrderByDescending(m => m.MessageSent);
            return await PagedList<Message>.CreateAsync(messages, messageParams.PageNumber, messageParams.PageSize);
        }

        public async Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId)
        {
            var messages = await _context.Messages
                .Include(m => m.Sender).ThenInclude(s => s.Photos)
                .Include(m => m.Recipient).ThenInclude(r => r.Photos)
                .Where(m => m.RecipientId == userId && m.RecipientDeleted == false
                && m.SenderId == recipientId
                || m.SenderId == userId && m.SenderDeleted == false
                && m.RecipientId == recipientId)
                .OrderBy(m => m.MessageSent).ToListAsync();
            return messages;
        }

        public async Task<Review> GetReview(string penName, string bookAsin, DateTime reviewDate, string reviewTitle)
        {
            return await _context.Reviews.FirstOrDefaultAsync(rev => rev.PenName == penName 
                        && rev.BookAsin == bookAsin && rev.ReviewDate == reviewDate 
                        && rev.ReviewTitle == reviewTitle);
        }

        public async Task<IEnumerable<Session>> GetSessions()
        {
            var sessions = await _context.Sessions.OrderByDescending(s => s.CreatedOn).ToListAsync();
            return sessions;
        }

        public async Task<Session> GetSession(int id)
        {
            var session = await _context.Sessions.SingleOrDefaultAsync(s => s.Id == id);
            return session;
        }

        public async Task<PagedList<Assignment>> GetAssignments(AssignmentParams assParams)
        {
             var assignments = _context.Assignments.Include(ass => ass.AssignedTo).AsQueryable();
            if(assParams.AssignedToId != 0 && assParams.AssignedToId != -1)
            {
                assignments = assignments.Where(ass => ass.AssignedToId == assParams.AssignedToId);
            }
            if(assParams.DateFrom != null && assParams.DateFrom != DateTime.MinValue)
            {
                assignments = assignments.Where(ass => ass.AssignedDate >= assParams.DateFrom);
            }
            if(assParams.DateTo != null && assParams.DateTo != DateTime.MinValue)
            {
                assignments = assignments.Where(ass => ass.AssignedDate <= assParams.DateTo);
            }
            if(!string.IsNullOrWhiteSpace(assParams.BookAsin))
            {
                assignments = assignments.Where(ass => ass.BookAsin == assParams.BookAsin);
            }
            if(!string.IsNullOrWhiteSpace(assParams.Country))
            {
                assignments = assignments.Where(ass => ass.Country.ToLower() == assParams.Country.ToLower());
            }
            
            assignments = assignments.OrderByDescending(ass => ass.AssignedDate);
            return await PagedList<Assignment>.CreateAsync(assignments, assParams.PageNumber, assParams.PageSize);
        }

        public async Task<Assignment> GetAssignment(string bookAsin, DateTime assignedDate, int assignedToId, int startingRating)
        {
            return await _context.Assignments.FirstOrDefaultAsync(ass =>
                ass.BookAsin == bookAsin && ass.AssignedDate == assignedDate 
                        && ass.AssignedToId == assignedToId && ass.StartingRating == startingRating);
        }
    }
}