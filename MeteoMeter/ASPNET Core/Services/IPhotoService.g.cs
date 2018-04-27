
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Services
{ 
    public interface IPhotoService
    { 
		IQueryable<Photo> GetAll(); 
		Task<Photo> GetById(int id);      
        Task Save(Photo entity); 
        Task Delete(int id); 
    } 
}