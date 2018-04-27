
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface IIdeaAnswerRepository : IRepository<IdeaAnswer>
    { 
		IQueryable<IdeaAnswer> GetAllWithReferences();
		Task<IdeaAnswer> GetByIdWithReferences(int id);
    } 
}