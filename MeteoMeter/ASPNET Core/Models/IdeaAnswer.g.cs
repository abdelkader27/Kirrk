
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class IdeaAnswer : Answer
	{
		public IdeaAnswer() : base()
		{
		}
								public virtual Idea IdeaCard { get; set; }

								public virtual Choice IdeaChoice { get; set; }


	}
}