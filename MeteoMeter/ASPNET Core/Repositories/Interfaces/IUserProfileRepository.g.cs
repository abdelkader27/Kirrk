
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface IUserProfileRepository : IRepository<UserProfile>
    { 
		IQueryable<UserProfile> GetAllWithReferences();
		Task<UserProfile> GetByIdWithReferences(int id);
    } 
}