
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface IIdeaAnswerService
    { 
		IQueryable<IdeaAnswer> GetAll(); 
		Task<IdeaAnswer> GetById(int id);      
        Task Save(IdeaAnswer entity); 
        Task Delete(int id); 
    } 
}