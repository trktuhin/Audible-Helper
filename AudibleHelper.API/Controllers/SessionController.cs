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

    public class SessionController: ControllerBase
    {
        private readonly IAudibleRepository _repo;
        private readonly IMapper _mapper;
        public SessionController(IAudibleRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpPost]
        public async Task<IActionResult> AddSession(SessionForCreationDto dto)
        {
            var session = _mapper.Map<Session>(dto);
            int userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var user = await _repo.GetUser(userId);
            session.CreatedBy = user.KnownAs;
            _repo.Add(session);
            if(await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not add the session");
        }

        [HttpGet]
        public async Task<IActionResult> GetSessions() {
            var sessions = await _repo.GetSessions();
            return Ok(sessions);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSession(SessionEditDto dto)
        {
            var sessionInDb = await _repo.GetSession(dto.Id);
            if(sessionInDb == null)
            {
                return NotFound();
            }
            sessionInDb.StartDate = dto.StartDate;
            sessionInDb.EndDate = dto.EndDate;
            sessionInDb.Name = dto.Name;
            if(await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not update!");
        }

        [HttpPost("DeleteSession/{id}")]
        public async Task<IActionResult> DeleteSession(int id)
        {
            var sessionInDb = await _repo.GetSession(id);
            if(sessionInDb == null)
            {
                return NotFound();
            }
            _repo.Delete(sessionInDb);
            if(await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not delete!");
        }
    }
}