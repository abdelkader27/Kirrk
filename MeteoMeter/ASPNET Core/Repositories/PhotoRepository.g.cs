
using Microsoft.EntityFrameworkCore; 
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using  MeteoMeter.Backend.Models;
using  MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Repositories
{ 
    public class PhotoRepository : Repository<Photo>, IPhotoRepository
    { 
		public PhotoRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<Photo> GetAllWithReferences()
        { 
            return DbContext.Set<Photo>().AsNoTracking(); 
        }

		public async Task<Photo> GetByIdWithReferences(int id)
        {
            return await DbContext.Set<Photo>().FirstOrDefaultAsync(p=>p.Id == id);
        }
    } 
}