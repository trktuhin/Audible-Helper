using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using AudibleHelper.API.Data;
using AudibleHelper.API.Dtos;
using AudibleHelper.API.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using AudibleHelper.API.Models;

namespace AudibleHelper.API.Controllers
{

    // [ServiceFilter(typeof(LoggedUserActivity))]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IAudibleRepository _repo;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        public UsersController(IAudibleRepository repo, IMapper mapper, UserManager<User> userManager)
        {
            _mapper = mapper;
            _userManager = userManager;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var currentUser = await _repo.GetUser(currentUserId);
            userParams.UserId = currentUserId;

            if(string.IsNullOrWhiteSpace(userParams.Gender))
            {
                userParams.Gender = "all";
            }
            var users = await _repo.GetUsers(userParams);
            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            Response.AddPagination(users.CurrentPage,users.PageSize,users.TotalCount,users.TotalPages);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name="GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetailDto>(user);
            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto updateDto){
            if(id!=int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)){
                return Unauthorized();
            }
            var userFromRepo = await _repo.GetUser(id);
            _mapper.Map(updateDto,userFromRepo);
            if(await _repo.SaveAll())
                return NoContent();
            throw new Exception($"Updating user {id} failed on save");

        }

        [HttpPost("{id}/ChangePassword")]
        public async Task<IActionResult> ChangePassword(int id, PasswordChangeDto dto)
        {
            if(id!=int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)){
                return Unauthorized();
            }
            var userFromRepo = await _repo.GetUser(id);
            var result = await _userManager.ChangePasswordAsync(userFromRepo, dto.OldPassword, dto.NewPassword);
            if(result.Succeeded)
            {
                return Ok();
            }
            else
            {
                return BadRequest("Could not change password");
            }
        }

        [HttpPost("DeleteUser/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var userFromRepo = await _repo.GetUser(id);
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            if(userId == id)
            {
                return BadRequest("You can not delete yourself");
            }
            if(userFromRepo == null)
            {
                return NotFound();
            }
            var result = await _userManager.DeleteAsync(userFromRepo);
            if(result.Succeeded)
            {
                return Ok();
            }
            return BadRequest("Could not delete user");
        }

        [HttpGet("GetAllUser")]
        public async Task<IActionResult> GetAllUser()
        {
            var users = await _repo.GetAllUsers();
            return Ok(users);
        }
        [HttpGet("GetUnreadMessageCount")]
        public IActionResult GetUnreadMessageCount()
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var count = _repo.GetUnreadMessageCount(userId);
            return Ok(count);
        }

        [HttpPost("DeleteMessageRange")]
        public async Task<IActionResult> DeleteMessageRange(DeleteDto dto)
        {
            int userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var user = await _repo.GetUser(userId);
            var isAdmin = await _userManager.IsInRoleAsync(user, "Admin");
            if(!isAdmin)
            {
                return Unauthorized();
            }
            var messages = await _repo.GetMessagesForDelete(dto);
            _repo.RemoveMultiple(messages);
            if(await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not delete messages");
        }
    }
}