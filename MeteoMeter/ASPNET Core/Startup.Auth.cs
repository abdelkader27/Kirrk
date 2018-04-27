
using System;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using MeteoMeter.Backend.Models;
using MeteoMeter.Backend.Auth;

namespace MeteoMeter.Backend
{
    public partial class Startup
    {
		private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; // todo: get this from somewhere secure
		private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

		public void ConfigureAuth(IServiceCollection services)
        {
		   services.AddTransient<IJwtFactory, JwtFactory>();

           services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

			var jwtSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));
			
			// Configure JwtIssuerOptions
			services.Configure<JwtIssuerOptions>(options =>
			{
				options.Issuer = jwtSettingOptions[nameof(JwtIssuerOptions.Issuer)];
				options.Audience = jwtSettingOptions[nameof(JwtIssuerOptions.Audience)];
				options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
			});

			// Get options from app settings
			var authSettings = Configuration.GetSection(nameof(AuthSettings));

			// Configure AuthSettings
			services.Configure<AuthSettings>(options =>
			{
				options.FacebookAppId = authSettings[nameof(AuthSettings.FacebookAppId)];
				options.FacebookAppSecret = authSettings[nameof(AuthSettings.FacebookAppSecret)];
			});

			var tokenValidationParameters = new TokenValidationParameters
			{
				ValidateIssuer = true,
				ValidIssuer = jwtSettingOptions[nameof(JwtIssuerOptions.Issuer)],

				ValidateAudience = true,
				ValidAudience = jwtSettingOptions[nameof(JwtIssuerOptions.Audience)],

				ValidateIssuerSigningKey = true,
				IssuerSigningKey = _signingKey,

				RequireExpirationTime = false,
				ValidateLifetime = true,
				ClockSkew = TimeSpan.Zero
			};

			services.AddAuthentication(options =>
			{
				options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
			}).AddCookie(cfg => cfg.SlidingExpiration = true)
			.AddJwtBearer(configureOptions =>
			{
				configureOptions.ClaimsIssuer = jwtSettingOptions[nameof(JwtIssuerOptions.Issuer)];
				configureOptions.TokenValidationParameters = tokenValidationParameters;
				configureOptions.SaveToken = true;
			})			.AddFacebook(facebookOptions =>
			{
				facebookOptions.AppId = authSettings[nameof(AuthSettings.FacebookAppId)];
				facebookOptions.AppSecret = authSettings[nameof(AuthSettings.FacebookAppSecret)];
			})
												;

			services.Configure<IdentityOptions>(options =>
            {
                // Password settings

                // Lockout settings
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
                options.Lockout.MaxFailedAccessAttempts = 10;
                options.Lockout.AllowedForNewUsers = true;

                // User settings
                options.User.RequireUniqueEmail = true;
            });

            services.ConfigureApplicationCookie(options =>
            {
                // Cookie settings
                options.Cookie.HttpOnly = true;
                options.Cookie.Expiration = TimeSpan.FromDays(150);
                options.LoginPath = "/Account/Login"; // If the LoginPath is not set here, ASP.NET Core will default to /Account/Login
                options.LogoutPath = "/Account/Logout"; // If the LogoutPath is not set here, ASP.NET Core will default to /Account/Logout
                options.AccessDeniedPath = "/Account/AccessDenied"; // If the AccessDeniedPath is not set here, ASP.NET Core will default to /Account/AccessDenied
                options.SlidingExpiration = true;
            });
        }

        public void ConfigureAuth(IApplicationBuilder app)
        {
            app.UseAuthentication();

            // Add external authentication middleware below. To configure them please see https://go.microsoft.com/fwlink/?LinkID=532715

        }
    }
}