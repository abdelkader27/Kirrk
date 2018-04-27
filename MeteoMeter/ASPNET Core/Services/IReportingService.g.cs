
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface IReportingService
    { 
		IQueryable<Reporting> GetAll(); 
		Task<Reporting> GetById(int id);      
        Task Save(Reporting entity); 
        Task Delete(int id); 
    } 
}