using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Interface;
using AutoMapper;
using WebAPI.Helpers;
using WebAPI.Extensions;
using WebAPI.Middlewares;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(options => options.UseSqlServer(Configuration.GetConnectionString("ApnaGhrConstr")));
            services.AddControllers();
            services.AddCors();
            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
            services.AddScoped<IUnitOfWork,UnitOfWork>();
            // Swagger API Documentation
            services.AddSwaggerDocument(configure => configure.Title = "Apna Ghar API");

            // Jwt Authentication 
            var secret_Key = Configuration.GetSection("AppSettings:Secret_Key").Value;
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret_Key));
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(opt =>
                {
                    opt.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        IssuerSigningKey = key
                    };
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //For Execption Handling Middleware
            app.ConfigureExceptionHandler(env);
            //app.ConfigureBuiltInExceptionHandler(env);

            app.UseOpenApi();
            app.UseSwaggerUi3();

            app.UseRouting();
            app.UseCors(m => m.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
