
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class Reporting : Card
	{
		public Reporting() : base()
		{
		}

		public double Results { get; set; }


		public int Views { get; set; }


		public int IdCard { get; set; }


	}
}