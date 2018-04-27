
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface IIdeaService
    { 
		IQueryable<Idea> GetAll(); 
		Task<Idea> GetById(int id);      
        Task Save(Idea entity); 
        Task Delete(int id); 
    } 
}