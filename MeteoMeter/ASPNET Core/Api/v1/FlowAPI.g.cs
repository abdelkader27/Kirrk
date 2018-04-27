
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

namespace MeteoMeter.Backend.Api.FlowAPI
{
	/// <summary>
	/// Controller responsible for all data interactions with the FlowAPI
	/// </summary>
	[Route("api/v1/MeteoMeterFlowAPI")]
	public partial class FlowAPI : Controller
	{
		private ICardService _CardService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.FlowAPIController"/> class.
		/// </summary>
		public FlowAPI(ICardService CardService)
		{
			_CardService = CardService;
		}

		[HttpGet]
		[Route("/api/flow/list")]
		[ProducesResponseType(typeof(CardsVM), 200)]
		public async Task<IActionResult> list(int idUser)
		{
			

			try
			{
				var list = new List<CardsVM>();
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
				return Ok(Enumerable.Empty <CardsVM> ().AsQueryable());
			}
		}
	}
}