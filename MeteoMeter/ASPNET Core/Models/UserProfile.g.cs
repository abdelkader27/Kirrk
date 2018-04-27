
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class UserProfile : Identifier
	{
		public UserProfile() : base()
		{
		}

		public string UserId { get; set; }


		public string Job { get; set; }


		public string Department { get; set; }


		public string City { get; set; }


		public string Country { get; set; }


	}
}