
using System;
using System.Net;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MeteoMeter.Backend.DataModels;
using MeteoMeter.Backend.Models;
using MeteoMeter.Backend.Services;
using MeteoMeter.Backend.ViewModels;

namespace MeteoMeter.Backend.Api.UserAPI
{
	/// <summary>
	/// Controller responsible for all data interactions with the UserAPI
	/// </summary>
	[Route("api/v1/MeteoMeterUserAPI")]
	public partial class UserAPI : Controller
	{
		private IUserProfileService _UserProfileService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.UserAPIController"/> class.
		/// </summary>
		public UserAPI(IUserProfileService UserProfileService)
		{
			_UserProfileService = UserProfileService;
		}

		[HttpGet]
		[Route("/api/user/signIn")]
		public async Task<IActionResult> signIn(SignInVM signIn)
		{
			
			try
			{
				return NotFound();
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpGet]
		[Route("/api/user/get")]
		[ProducesResponseType(typeof(UserVM), 200)]
		public async Task<IActionResult> get(int idUser)
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new UserVM()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpPut]
		[Route("/api/user/update")]
		public async Task<IActionResult> update(UserVM user)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var UserProfile =  user.GetUserProfileFromViewModel();
				await _UserProfileService.Save(UserProfile);

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpGet]
		[Route("/api/user/list")]
		[ProducesResponseType(typeof(UsersVM), 200)]
		public async Task<IActionResult> list()
		{
			

			try
			{
				var list = new List<UsersVM>();
				var result = _UserProfileService.GetAll();
				if(result != null)
				{
					foreach(var item in result)
					{
						//Todo, put your mapping implementation here
					}

					return this.Ok(await Task.FromResult(list));
				}
			
				return NotFound();
			}
			catch (Exception xcp)
			{
				//log error
				return Ok(Enumerable.Empty <UsersVM> ().AsQueryable());
			}
		}

		[HttpGet]
		[Route("/api/user/checkEmail")]
		public async Task<IActionResult> checkEmail(EmailVM email)
		{
			
			try
			{
				return NotFound();
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}
	}
}