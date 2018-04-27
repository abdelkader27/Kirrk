
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class IdeasVM 
	{
		public IdeasVM() 
		{
			Ideas = new HashSet<Idea>();
		}

		private HashSet<Idea> _ideas; 
		private HashSet<Idea> Ideas { get { return _ideas ??(_ideas = new HashSet<Idea>()); } set {  _ideas = value; }}

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public IdeasVM ConvertFromModel(HashSet<Idea> idea)
		{
			_ideas = idea;

			return this;
		}

		public HashSet<Idea> GetIdeaFromViewModel()
		{
			return this._ideas;
		}
			
		public HashSet<Idea> ConvertToModel()
		{
			return this.Ideas;
		}
	}
}