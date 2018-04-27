
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class Group : Identifier
	{
		public Group() : base()
		{
		}

		public string Name { get; set; }


		public string GroupDepartment { get; set; }


		public string City { get; set; }


		public DateTime CreationDate { get; set; }


		public string Country { get; set; }

								public virtual UserProfile CreatedBy { get; set; }

		private HashSet<UserProfile> _Users; 
						public HashSet<UserProfile> Users { get { return _Users ??(_Users = new HashSet<UserProfile>()); }}


	}
}