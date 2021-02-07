using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using WebAPI.Errors;

namespace WebAPI.Middlewares
{
    public class ExceptionMiddleware
    {
        public readonly RequestDelegate Next;
        public readonly ILogger Logger;
        public readonly IWebHostEnvironment env;
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IWebHostEnvironment env){
            this.Next = next;
            this.Logger = logger;
            this.env = env;
        }

        public async Task Invoke(HttpContext context){
            try {
                await Next(context);
            }
            catch(Exception ex) {
                string message;
                ApiError response;
                HttpStatusCode statusCode = HttpStatusCode.InternalServerError;
                var exceptionType = ex.GetType();

                if (exceptionType == typeof(UnauthorizedAccessException))
                {
                    statusCode = HttpStatusCode.Forbidden;
                    message = "You are not Authorized";
                }
                else
                {
                    message = ex.Message;
                }

                if (env.IsDevelopment())
                {
                    response = new ApiError((int)statusCode, ex.Message, ex.StackTrace);
                }
                else
                {
                    response = new ApiError((int)statusCode, message);
                }

                Logger.LogError(ex, ex.Message);
                context.Response.StatusCode = (int)statusCode;
                context.Response.ContentType = "application/json";
                await context.Response.WriteAsync(response.ToString());
            }
        }
    }
}