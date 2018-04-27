
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class EmailVM 
	{
		public EmailVM() 
		{
		}

		public string Email  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public EmailVM ConvertFromModel()
		{

			return this;
		}

	
	}
}