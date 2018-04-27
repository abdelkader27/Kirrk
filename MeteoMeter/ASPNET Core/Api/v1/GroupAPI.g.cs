
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

namespace MeteoMeter.Backend.Api.GroupAPI
{
	/// <summary>
	/// Controller responsible for all data interactions with the GroupAPI
	/// </summary>
	[Route("api/v1/MeteoMeterGroupAPI")]
	public partial class GroupAPI : Controller
	{
		private IGroupService _GroupService;
		private IUserProfileService _UserProfileService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.GroupAPIController"/> class.
		/// </summary>
		public GroupAPI(IGroupService GroupService,IUserProfileService UserProfileService)
		{
			_GroupService = GroupService;
			_UserProfileService = UserProfileService;
		}

		[HttpPost]
		[Route("/api/group/create")]
		public async Task<IActionResult> create(GroupVM group)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Group  =  group.GetGroupFromViewModel();
				await _GroupService.Save(Group );

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpPut]
		[Route("/api/group/update")]
		public async Task<IActionResult> update(GroupVM group)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Group =  group.GetGroupFromViewModel();
				await _GroupService.Save(Group);

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpDelete]
		[Route("/api/group/delete")]
		public async Task<IActionResult> delete(int idGroup)
		{
			
			try
			{
				return Ok(true);
			}
			catch (Exception xcp)
			{
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpGet]
		[Route("/api/group/listMyGroups")]
		[ProducesResponseType(typeof(GroupsVM), 200)]
		public async Task<IActionResult> listMyGroups(int idUser)
		{
			

			try
			{
				var list = new List<GroupsVM>();
				var result = _GroupService.GetAll();
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
				return Ok(Enumerable.Empty <GroupsVM> ().AsQueryable());
			}
		}

		[HttpGet]
		[Route("/api/group/list")]
		[ProducesResponseType(typeof(GroupsVM), 200)]
		public async Task<IActionResult> list(int idUser)
		{
			

			try
			{
				var list = new List<GroupsVM>();
				var result = _GroupService.GetAll();
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
				return Ok(Enumerable.Empty <GroupsVM> ().AsQueryable());
			}
		}

		[HttpPut]
		[Route("/api/group/addMember")]
		public async Task<IActionResult> addMember(UserVM user,int id)
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

		[HttpPut]
		[Route("/api/group/removeMember")]
		public async Task<IActionResult> removeMember(int id,int idUser)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}
	}
}