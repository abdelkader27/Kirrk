
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class BestContributorVM 
	{
		public BestContributorVM() 
		{
		}

		public int Posts  { get; set; }
		public double Answers  { get; set; }
		public string PictureUrl  { get; set; }
		public string Firstname  { get; set; }
		public string Lastname  { get; set; }
		public string Department  { get; set; }
		public string City  { get; set; }
		public string Country  { get; set; }

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public BestContributorVM ConvertFromModel(UserProfile userProfile)
		{
			Department = userProfile.Department;
			City = userProfile.City;
			Country = userProfile.Country;

			return this;
		}

		public UserProfile GetUserProfileFromViewModel()
		{
			var model = new UserProfile();
			model.Department =  Department;
			model.City =  City;
			model.Country =  Country;

			return model;
		}
			
	}
}