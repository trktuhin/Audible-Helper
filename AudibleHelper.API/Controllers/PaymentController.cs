using System;
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
    public class PaymentController: ControllerBase
    {
        private readonly IAudibleRepository _repo;
        private readonly IMapper _mapper;

        public PaymentController(IAudibleRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        [HttpGet("UnpaidSessions/{memberId}")]
        public async Task<IActionResult> GetUnpaidSessions(int memberId)
        {
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> AddPayment(PaymentCreationDto dto)
        {
            var payment = _mapper.Map<Payment>(dto);
            payment.IsReceived = false;
            payment.LastModifiedOn = DateTime.Now;
            _repo.Add(payment);
            if(await _repo.SaveAll())
            {
                return Ok();
            }
            return BadRequest("Could not create the payment");
        }
    }
}