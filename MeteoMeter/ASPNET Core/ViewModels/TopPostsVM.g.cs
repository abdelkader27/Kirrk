
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class TopPostsVM 
	{
		public TopPostsVM() 
		{
			Cards = new HashSet<Card>();
		}

		public int Views  { get; set; }
		public int Answers  { get; set; }
		private HashSet<Card> _cards; 
		private HashSet<Card> Cards { get { return _cards ??(_cards = new HashSet<Card>()); } set {  _cards = value; }}

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public TopPostsVM ConvertFromModel(HashSet<Card> card)
		{
			_cards = card;

			return this;
		}

		public HashSet<Card> GetCardFromViewModel()
		{
			return this._cards;
		}
			
		public HashSet<Card> ConvertToModel()
		{
			return this.Cards;
		}
	}
}