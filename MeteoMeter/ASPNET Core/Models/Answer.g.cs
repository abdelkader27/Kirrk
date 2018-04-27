
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public abstract partial class Answer : Identifier
	{
		public Answer() : base()
		{
		}

		public DateTime AnswerDate { get; set; }

								public virtual UserProfile AnsweredBy { get; set; }


	}
}