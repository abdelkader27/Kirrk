
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class Choice : Identifier
	{
		public Choice() : base()
		{
		}

		public string Name { get; set; }


	}
}