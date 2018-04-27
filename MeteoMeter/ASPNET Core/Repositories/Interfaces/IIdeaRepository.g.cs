
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface IIdeaRepository : IRepository<Idea>
    { 
		IQueryable<Idea> GetAllWithReferences();
		Task<Idea> GetByIdWithReferences(int id);
    } 
}