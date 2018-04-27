
using Microsoft.EntityFrameworkCore; 
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using  MeteoMeter.Backend.Models;
using  MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Repositories
{ 
    public class IdeaRepository : Repository<Idea>, IIdeaRepository
    { 
		public IdeaRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<Idea> GetAllWithReferences()
        { 
            return DbContext.Set<Idea>().Include(m=>m.CreatedBy).Include(m=>m.Photo).Include(m=>m.TargetGroups).Include(m=>m.Choices).AsNoTracking(); 
        }

		public async Task<Idea> GetByIdWithReferences(int id)
        {
            return await DbContext.Set<Idea>().Include(m=>m.CreatedBy).Include(m=>m.Photo).Include(m=>m.TargetGroups).Include(m=>m.Choices).FirstOrDefaultAsync(p=>p.Id == id);
        }
    } 
}