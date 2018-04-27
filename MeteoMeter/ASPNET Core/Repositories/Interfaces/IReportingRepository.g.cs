
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface IReportingRepository : IRepository<Reporting>
    { 
		IQueryable<Reporting> GetAllWithReferences();
		Task<Reporting> GetByIdWithReferences(int id);
    } 
}