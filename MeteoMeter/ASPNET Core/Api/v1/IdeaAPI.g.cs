
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

namespace MeteoMeter.Backend.Api.IdeaAPI
{
	/// <summary>
	/// Controller responsible for all data interactions with the IdeaAPI
	/// </summary>
	[Route("api/v1/MeteoMeterIdeaAPI")]
	public partial class IdeaAPI : Controller
	{
		private IIdeaService _IdeaService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.IdeaAPIController"/> class.
		/// </summary>
		public IdeaAPI(IIdeaService IdeaService)
		{
			_IdeaService = IdeaService;
		}

		[HttpGet]
		[Route("/api/idea/listIdea")]
		[ProducesResponseType(typeof(IdeasVM), 200)]
		public async Task<IActionResult> list()
		{
			

			try
			{
				var list = new List<IdeasVM>();
				var result = _IdeaService.GetAll();
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
				return Ok(Enumerable.Empty <IdeasVM> ().AsQueryable());
			}
		}

		[HttpDelete]
		[Route("/api/idea/delete")]
		public async Task<IActionResult> delete(int idIdea)
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

		[HttpPut]
		[Route("/api/idea/updateIdea")]
		public async Task<IActionResult> update(IdeaVM idea)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Idea =  idea.GetIdeaFromViewModel();
				await _IdeaService.Save(Idea);

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpPost]
		[Route("/api/idea/create")]
		public async Task<IActionResult> create(IdeaVM idea)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Idea  =  idea.GetIdeaFromViewModel();
				await _IdeaService.Save(Idea );

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}
	}
}