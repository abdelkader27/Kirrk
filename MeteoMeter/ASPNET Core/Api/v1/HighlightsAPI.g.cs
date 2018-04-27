
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

namespace MeteoMeter.Backend.Api.HighlightsAPI
{
	/// <summary>
	/// Controller responsible for all data interactions with the HighlightsAPI
	/// </summary>
	[Route("api/v1/MeteoMeterHighlightsAPI")]
	public partial class HighlightsAPI : Controller
	{
		private ICardService _CardService;
		private IUserProfileService _UserProfileService;
		private IReportingService _ReportingService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.HighlightsAPIController"/> class.
		/// </summary>
		public HighlightsAPI(ICardService CardService,IUserProfileService UserProfileService,IReportingService ReportingService)
		{
			_CardService = CardService;
			_UserProfileService = UserProfileService;
			_ReportingService = ReportingService;
		}

		[HttpGet]
		[Route("/api/highlights/getTopPosts")]
		[ProducesResponseType(typeof(TopPostsVM), 200)]
		public async Task<IActionResult> GetTopPosts()
		{
			

			try
			{
				var list = new List<TopPostsVM>();
				var result = _CardService.GetAll();
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
				return Ok(Enumerable.Empty <TopPostsVM> ().AsQueryable());
			}
		}

		[HttpGet]
		[Route("/api/highlights/getBestContributor")]
		[ProducesResponseType(typeof(BestContributorVM), 200)]
		public async Task<IActionResult> getBestContributor()
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new BestContributorVM()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpGet]
		[Route("/api/highlights/getBestIdea")]
		[ProducesResponseType(typeof(ReportVM), 200)]
		public async Task<IActionResult> getBestIdea()
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new ReportVM()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}
	}
}