
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class Card : Identifier
	{
		public Card() : base()
		{
		}

		public DateTime PublicationDate { get; set; }


		public string Content { get; set; }


		public string Type { get; set; }

								public virtual UserProfile CreatedBy { get; set; }

								public virtual Photo Photo { get; set; }

		private HashSet<Group> _TargetGroups; 
						public HashSet<Group> TargetGroups { get { return _TargetGroups ??(_TargetGroups = new HashSet<Group>()); }}

		private HashSet<Choice> _Choices; 
						public HashSet<Choice> Choices { get { return _Choices ??(_Choices = new HashSet<Choice>()); }}


	}
}