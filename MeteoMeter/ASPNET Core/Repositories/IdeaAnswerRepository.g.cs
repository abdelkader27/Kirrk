
using Microsoft.EntityFrameworkCore; 
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using  MeteoMeter.Backend.Models;
using  MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Repositories
{ 
    public class IdeaAnswerRepository : Repository<IdeaAnswer>, IIdeaAnswerRepository
    { 
		public IdeaAnswerRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<IdeaAnswer> GetAllWithReferences()
        { 
            return DbContext.Set<IdeaAnswer>().Include(m=>m.AnsweredBy).Include(m=>m.IdeaCard).Include(m=>m.IdeaChoice).AsNoTracking(); 
        }

		public async Task<IdeaAnswer> GetByIdWithReferences(int id)
        {
            return await DbContext.Set<IdeaAnswer>().Include(m=>m.AnsweredBy).Include(m=>m.IdeaCard).Include(m=>m.IdeaChoice).FirstOrDefaultAsync(p=>p.Id == id);
        }
    } 
}