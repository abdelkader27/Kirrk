
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class UserVM 
	{
		public UserVM() 
		{
			User = new UserProfile();
		}

		public string Firstname  { get; set; }
		public string Lastname  { get; set; }
		public string PictureUrl  { get; set; }
		public string FacebookId  { get; set; }
		private UserProfile _user;
		public virtual UserProfile User { get {return _user;} set { _user = value;}}

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public UserVM ConvertFromModel(UserProfile userProfile)
		{
			_user = userProfile;

			return this;
		}

		public UserProfile GetUserProfileFromViewModel()
		{
			return this._user;
		}
			
		public UserProfile ConvertToModel()
		{
			return this.User;
		}
	}
}