
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class CardVM 
	{
		public CardVM() 
		{
			Card = new Card();
		}

		private Card _card;
		public virtual Card Card { get {return _card;} set { _card = value;}}

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public CardVM ConvertFromModel(Card card)
		{
			_card = card;

			return this;
		}

		public Card GetCardFromViewModel()
		{
			return this._card;
		}
			
		public Card ConvertToModel()
		{
			return this.Card;
		}
	}
}