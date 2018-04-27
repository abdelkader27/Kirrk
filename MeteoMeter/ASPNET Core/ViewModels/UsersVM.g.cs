
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class UsersVM 
	{
		public UsersVM() 
		{
			Users = new HashSet<UserProfile>();
		}

		private HashSet<UserProfile> _users; 
		private HashSet<UserProfile> Users { get { return _users ??(_users = new HashSet<UserProfile>()); } set {  _users = value; }}

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public UsersVM ConvertFromModel(HashSet<UserProfile> userProfile)
		{
			_users = userProfile;

			return this;
		}

		public HashSet<UserProfile> GetUserProfileFromViewModel()
		{
			return this._users;
		}
			
		public HashSet<UserProfile> ConvertToModel()
		{
			return this.Users;
		}
	}
}