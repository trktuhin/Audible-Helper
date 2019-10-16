using System;
using System.Security.Claims;
using System.Threading.Tasks;
using AudibleHelper.API.Data;
using AudibleHelper.API.Dtos;
using AudibleHelper.API.Helpers;
using AudibleHelper.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AudibleHelper.API.Controllers
{
    [ServiceFilter(typeof(LoggedUserActivity))]
    [Route("api/[controller]")]
    [ApiController]

    public class AssignmentController: ControllerBase
    {
        private readonly IAudibleRepository _repo;
        private readonly IMapper _mapper;
        public AssignmentController(IAudibleRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        [HttpPost]
        public async Task<IActionResult> AddAssignment(AssignmentCreationDto dto)
        {
            var assignment = _mapper.Map<Assignment>(dto);
            assignment.AssignedDate = DateTime.Now.Date;
            assignment.CreatedOn = DateTime.Now;
            assignment.LastModifiedOn = DateTime.Now;
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var currentUser = await _repo.GetUser(currentUserId);
            if(currentUser == null)
            {
                return BadRequest("Could not find user!");
            }
            assignment.CreatedBy = currentUser.KnownAs;
            assignment.IsDeleted = false;
            _repo.Add(assignment);
            if(await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not create the assignment");
        }

        [HttpPost("GetAllAssignments")]
        public async Task<IActionResult> GetAssignments(AssignmentParams assParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            if(assParams.SessionId !=0 && assParams.SessionId != -1)
            {
                var session = await _repo.GetSession(assParams.SessionId);
                if(session != null)
                {
                    assParams.DateFrom = session.StartDate;
                    assParams.DateTo = session.EndDate;
                }
            }
            if(assParams.AssignedToId == 0)
            {
                assParams.AssignedToId = currentUserId;
            }
            var assignments = await _repo.GetAssignments(assParams);
            
            Response.AddPagination(assignments.CurrentPage,assignments.PageSize,
            assignments.TotalCount,assignments.TotalPages);
            return Ok(assignments);
        }
        [HttpPut]
        public async Task<IActionResult> UpdateAssignment(Assignment assignment)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var currentUser = await _repo.GetUser(currentUserId);
            if(currentUser == null)
            {
                return BadRequest("Could not find user!");
            }
            var assignmentInDb = await _repo.GetAssignment(assignment.Id);
            if(assignmentInDb == null)
            {
                return NotFound();
            }
            assignmentInDb.BookAsin = assignment.BookAsin;
            assignmentInDb.Country = assignment.Country;
            assignmentInDb.TotalCodes = assignment.TotalCodes;
            assignmentInDb.StartingRating = assignment.StartingRating;
            assignmentInDb.LastModifiedOn = DateTime.Now;
            assignmentInDb.LastModifiedBy = currentUser.KnownAs;
            if(await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not update");
        }

        [HttpPost("DeleteAssignment/{id}")]
        public async Task<IActionResult> DeleteAssignment(int id)
        {
            var assignmentInDb = await _repo.GetAssignment(id);
            if(assignmentInDb == null)
            {
                return NotFound();
            }
            assignmentInDb.IsDeleted = true;
            if(await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not delete");
        }

        [HttpPost("markComplete/{id}")]
        public async Task<IActionResult> MarkAsComplete(int id)
        {
            var assignmentInDb = await _repo.GetAssignment(id);
            if(assignmentInDb == null)
            {
                return NotFound();
            }
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var currentUser = await _repo.GetUser(currentUserId);
            if(currentUser == null)
            {
                return BadRequest("Could not find user!");
            }
            assignmentInDb.IsCompleted = true;
            assignmentInDb.LastModifiedBy = currentUser.KnownAs;
            assignmentInDb.LastModifiedOn = DateTime.Now;
            if(await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not mark as complete");
        }
    }
}