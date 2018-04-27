
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using MeteoMeter.Backend.DataModels;
using MeteoMeter.Backend.Models;
using MeteoMeter.Backend.Repositories;

namespace MeteoMeter.Backend.Services
{ 
    public class UserProfileService : IUserProfileService
    { 
        private readonly IUserProfileRepository _repository; 
 
        public UserProfileService(IUserProfileRepository repository) 
        { 
            _repository = repository; 
        }

        public IQueryable<UserProfile> GetAll() 
        { 
            return _repository.GetAllWithReferences(); 
        } 
        
		public async Task<UserProfile> GetById(int id)
        {
            return await _repository.GetByIdWithReferences(id);
        }

        public async Task Save(UserProfile entity) 
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