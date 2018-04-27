
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface IUserProfileService
    { 
		IQueryable<UserProfile> GetAll(); 
		Task<UserProfile> GetById(int id);      
        Task Save(UserProfile entity); 
        Task Delete(int id); 
    } 
}