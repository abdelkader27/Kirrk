
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class GroupsVM 
	{
		public GroupsVM() 
		{
			Groups = new HashSet<Group>();
		}

		private HashSet<Group> _groups; 
		private HashSet<Group> Groups { get { return _groups ??(_groups = new HashSet<Group>()); } set {  _groups = value; }}

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public GroupsVM ConvertFromModel(HashSet<Group> group)
		{
			_groups = group;

			return this;
		}

		public HashSet<Group> GetGroupFromViewModel()
		{
			return this._groups;
		}
			
		public HashSet<Group> ConvertToModel()
		{
			return this.Groups;
		}
	}
}