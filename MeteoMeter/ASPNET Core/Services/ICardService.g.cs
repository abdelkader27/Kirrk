
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface ICardService
    { 
		IQueryable<Card> GetAll(); 
		Task<Card> GetById(int id);      
        Task Save(Card entity); 
        Task Delete(int id); 
    } 
}