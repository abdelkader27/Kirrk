
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class PictureVM 
	{
		public PictureVM() 
		{
		}

		public string Url  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public PictureVM ConvertFromModel(Photo photo)
		{
			Url = photo.Url;

			return this;
		}

		public Photo GetPhotoFromViewModel()
		{
			var model = new Photo();
			model.Url =  Url;

			return model;
		}
			
	}
}