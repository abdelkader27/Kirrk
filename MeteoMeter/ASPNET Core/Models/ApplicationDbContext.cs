
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Models
{
	public partial class ApplicationDbContext : IdentityDbContext<ApplicationUser>
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder builder)
		{
			builder.Entity<IdentityUserLogin<string>>().HasKey(e => new { e.UserId });
            builder.Entity<IdentityUserRole<string>>().HasKey(e => new { e.RoleId });
            builder.Entity<IdentityUserToken<string>>().HasKey(e => new { e.UserId });
										builder.Entity<Card>().HasKey(e => new {  e.Id   });
						builder.Entity<Idea>().HasKey(e => new {  e.Id   });
						builder.Entity<Group>().HasKey(e => new {  e.Id   });
						builder.Entity<UserProfile>().HasKey(e => new {  e.Id   });
						builder.Entity<Choice>().HasKey(e => new {  e.Id   });
						builder.Entity<IdeaAnswer>().HasKey(e => new {  e.Id   });
						builder.Entity<Reporting>().HasKey(e => new {  e.Id   });
						builder.Entity<Photo>().HasKey(e => new {  e.Id   });
					}


		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

				public DbSet<Card> Cards { get; set; }
				public DbSet<Idea> Ideas { get; set; }
				public DbSet<Group> Groups { get; set; }
				public DbSet<UserProfile> UserProfiles { get; set; }
				public DbSet<Choice> Choices { get; set; }
				public DbSet<IdeaAnswer> IdeaAnswers { get; set; }
				public DbSet<Reporting> Reportings { get; set; }
				public DbSet<Photo> Photos { get; set; }
				
	}
}