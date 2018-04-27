
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface ICardRepository : IRepository<Card>
    { 
		IQueryable<Card> GetAllWithReferences();
		Task<Card> GetByIdWithReferences(int id);
    } 
}