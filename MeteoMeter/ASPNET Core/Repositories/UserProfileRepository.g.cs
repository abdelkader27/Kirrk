
using Microsoft.EntityFrameworkCore; 
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using  MeteoMeter.Backend.Models;
using  MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Repositories
{ 
    public class UserProfileRepository : Repository<UserProfile>, IUserProfileRepository
    { 
		public UserProfileRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<UserProfile> GetAllWithReferences()
        { 
            return DbContext.Set<UserProfile>().AsNoTracking(); 
        }

		public async Task<UserProfile> GetByIdWithReferences(int id)
        {
            return await DbContext.Set<UserProfile>().FirstOrDefaultAsync(p=>p.Id == id);
        }
    } 
}