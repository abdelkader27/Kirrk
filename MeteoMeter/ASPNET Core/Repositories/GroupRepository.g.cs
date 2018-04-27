
using Microsoft.EntityFrameworkCore; 
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using  MeteoMeter.Backend.Models;
using  MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Repositories
{ 
    public class GroupRepository : Repository<Group>, IGroupRepository
    { 
		public GroupRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<Group> GetAllWithReferences()
        { 
            return DbContext.Set<Group>().Include(m=>m.CreatedBy).Include(m=>m.Users).AsNoTracking(); 
        }

		public async Task<Group> GetByIdWithReferences(int id)
        {
            return await DbContext.Set<Group>().Include(m=>m.CreatedBy).Include(m=>m.Users).FirstOrDefaultAsync(p=>p.Id == id);
        }
    } 
}