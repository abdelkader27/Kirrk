
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MeteoMeter.Backend.DataModels;


namespace MeteoMeter.Backend.ViewModels
{
	public partial class ReportVM 
	{
		public ReportVM() 
		{
			Reporting = new Reporting();
		}

		private Reporting _reporting;
		public virtual Reporting Reporting { get {return _reporting;} set { _reporting = value;}}

		[Timestamp]
		public byte[] RawVersion { get; set; }

		public ReportVM ConvertFromModel(Reporting reporting)
		{
			_reporting = reporting;

			return this;
		}

		public Reporting GetReportingFromViewModel()
		{
			return this._reporting;
		}
			
		public Reporting ConvertToModel()
		{
			return this.Reporting;
		}
	}
}