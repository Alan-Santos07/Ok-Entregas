
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using OkEntrega.webApi.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi
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
            services.AddTransient<IMailService, Services.MailService>();

            services.Configure<MailSettings>(Configuration.GetSection("MailSettings"));

            services.AddControllers()
            .AddNewtonsoftJson(options =>
             {
                 // Ignora os loopings nas consultas
                 options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                 // Ignora valores nulos ao fazer junções nas consultas
                 options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
             });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "OkEntrega.webApi", Version = "v1" });
            });
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:3000", "http://localhost:5000", "http://localhost:19006")
                                                                    .AllowAnyHeader()
                                                                    .AllowAnyMethod();
                    }
                );
            });
            services
                // Define a forma de autenticao
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = "JwtBearer";
                    options.DefaultChallengeScheme = "JwtBearer";
                })

                .AddJwtBearer("JwtBearer", options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {

                        ValidateIssuer = true,


                        ValidateAudience = true,


                        ValidateLifetime = true,


                        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("OKEntregas-chave-autenticacao")),


                        ClockSkew = TimeSpan.FromMinutes(30),


                        ValidIssuer = "OKEntregas.webApi",


                        ValidAudience = "OKEntregas.webApi"


                    };
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors("CorsPolicy");

                app.UseRouting();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "OkEntrega.webApi v1"));
            }

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
