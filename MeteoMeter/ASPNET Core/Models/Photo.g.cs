
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class Photo : Identifier
	{
		public Photo() : base()
		{
		}

		public string Url { get; set; }


	}
}