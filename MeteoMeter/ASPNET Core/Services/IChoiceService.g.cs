
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface IChoiceService
    { 
		IQueryable<Choice> GetAll(); 
		Task<Choice> GetById(int id);      
        Task Save(Choice entity); 
        Task Delete(int id); 
    } 
}