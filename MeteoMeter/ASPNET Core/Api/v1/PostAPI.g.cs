
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

namespace MeteoMeter.Backend.Api.PostAPI
{
	/// <summary>
	/// Controller responsible for all data interactions with the PostAPI
	/// </summary>
	[Route("api/v1/MeteoMeterPostAPI")]
	public partial class PostAPI : Controller
	{
		private IPhotoService _PhotoService;
		private ICardService _CardService;
		/// <summary>
		/// Initialize a new instance of <see cref="MeteoMeter.Backend.Api.PostAPIController"/> class.
		/// </summary>
		public PostAPI(IPhotoService PhotoService,ICardService CardService)
		{
			_PhotoService = PhotoService;
			_CardService = CardService;
		}

		[HttpPost]
		[Route("/api/post/uploadPicture")]
		public async Task<IActionResult> uploadPicture(PictureVM picture)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Photo =  picture.GetPhotoFromViewModel();
				await _PhotoService.Save(Photo );

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpGet]
		[Route("/api/post/getDefaultPicture")]
		[ProducesResponseType(typeof(PictureVM), 200)]
		public async Task<IActionResult> getDefaultPicture()
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new PictureVM()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpGet]
		[Route("/api/post/get")]
		[ProducesResponseType(typeof(CardVM), 200)]
		public async Task<IActionResult> get(int id)
		{
			
			try
			{
				return this.Ok(await Task.FromResult(new CardVM()));
			}
			catch (Exception xcp)
			{
				//log exception
				return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
			}
		}

		[HttpGet]
		[Route("/api/post/listByUser")]
		[ProducesResponseType(typeof(CardsVM), 200)]
		public async Task<IActionResult> getLatestsPostsByUser(int idUser)
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

		[HttpPut]
		[Route("/api/post/update")]
		public async Task<IActionResult> update(CardVM post)
		{
			
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
			{
				var Card =  post.GetCardFromViewModel();
				await _CardService.Save(Card);

				return this.Ok(true);
			}
			catch (Exception xcp) {
				//log exception
				return StatusCode((int)HttpStatusCode.InternalServerError);
			}		}

		[HttpGet]
		[Route("/api/post/listTopByUser")]
		[ProducesResponseType(typeof(CardsVM), 200)]
		public async Task<IActionResult> getTopPostsByUser(int idUser)
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

		[HttpDelete]
		[Route("/api/post/delete")]
		public async Task<IActionResult> delete(int id)
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
	}
}