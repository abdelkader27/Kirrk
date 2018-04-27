
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface IPhotoRepository : IRepository<Photo>
    { 
		IQueryable<Photo> GetAllWithReferences();
		Task<Photo> GetByIdWithReferences(int id);
    } 
}