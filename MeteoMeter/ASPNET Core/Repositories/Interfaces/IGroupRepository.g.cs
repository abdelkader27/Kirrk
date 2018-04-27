
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface IGroupRepository : IRepository<Group>
    { 
		IQueryable<Group> GetAllWithReferences();
		Task<Group> GetByIdWithReferences(int id);
    } 
}