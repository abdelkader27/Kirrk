
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class GroupVM 
	{
		public GroupVM() 
		{
			Group = new Group();
		}

		private Group _group;
		public virtual Group Group { get {return _group;} set { _group = value;}}

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public GroupVM ConvertFromModel(Group group)
		{
			_group = group;

			return this;
		}

		public Group GetGroupFromViewModel()
		{
			return this._group;
		}
			
		public Group ConvertToModel()
		{
			return this.Group;
		}
	}
}