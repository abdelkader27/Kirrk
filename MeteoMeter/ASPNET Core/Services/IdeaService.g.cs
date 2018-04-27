
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using MeteoMeter.Backend.DataModels;
using MeteoMeter.Backend.Models;
using MeteoMeter.Backend.Repositories;

namespace MeteoMeter.Backend.Services
{ 
    public class IdeaService : IIdeaService
    { 
        private readonly IIdeaRepository _repository; 
 
        public IdeaService(IIdeaRepository repository) 
        { 
            _repository = repository; 
        }

        public IQueryable<Idea> GetAll() 
        { 
            return _repository.GetAllWithReferences(); 
        } 
        
		public async Task<Idea> GetById(int id)
        {
            return await _repository.GetByIdWithReferences(id);
        }

        public async Task Save(Idea entity) 
        { 
            if (entity == null) 
            { 
                throw new ArgumentNullException(nameof(entity)); 
            }

			var oldEntity = await GetById(entity.Id);

			if(oldEntity == null)
           		await _repository.Insert(entity); 
			else
            	await _repository.Update(oldEntity, entity); 
        } 
 
        public async Task Delete(int id) 
        { 
			var entity = await GetById(id);

            if (entity == null) 
            { 
                throw new ArgumentNullException(nameof(entity)); 
            } 

            await _repository.Delete(entity); 
        } 
    } 
}