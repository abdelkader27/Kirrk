
using Microsoft.EntityFrameworkCore; 
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using  MeteoMeter.Backend.Models;
using  MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Repositories
{ 
    public class ChoiceRepository : Repository<Choice>, IChoiceRepository
    { 
		public ChoiceRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<Choice> GetAllWithReferences()
        { 
            return DbContext.Set<Choice>().AsNoTracking(); 
        }

		public async Task<Choice> GetByIdWithReferences(int id)
        {
            return await DbContext.Set<Choice>().FirstOrDefaultAsync(p=>p.Id == id);
        }
    } 
}