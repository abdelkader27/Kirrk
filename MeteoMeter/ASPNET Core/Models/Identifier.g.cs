
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public abstract partial class Identifier 
	{
		public Identifier() 
		{
		}

		public int Id { get; set; }


		[Timestamp]
		public new byte[] RawVersion { get; set; }
	}
}