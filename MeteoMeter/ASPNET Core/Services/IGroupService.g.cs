
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface IGroupService
    { 
		IQueryable<Group> GetAll(); 
		Task<Group> GetById(int id);      
        Task Save(Group entity); 
        Task Delete(int id); 
    } 
}