
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class IdeaVM 
	{
		public IdeaVM() 
		{
			Idea = new Idea();
		}

		private Idea _idea;
		public virtual Idea Idea { get {return _idea;} set { _idea = value;}}

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public IdeaVM ConvertFromModel(Idea idea)
		{
			_idea = idea;

			return this;
		}

		public Idea GetIdeaFromViewModel()
		{
			return this._idea;
		}
			
		public Idea ConvertToModel()
		{
			return this.Idea;
		}
	}
}