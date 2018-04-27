
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface IChoiceRepository : IRepository<Choice>
    { 
		IQueryable<Choice> GetAllWithReferences();
		Task<Choice> GetByIdWithReferences(int id);
    } 
}