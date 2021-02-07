using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using WebAPI.DTOS;
using WebAPI.Interface;
using WebAPI.Models;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;

namespace WebAPI.Controllers
{
    [AllowAnonymous]
    public class AccountController : BaseController
    {
        #region Properties
        private readonly IUnitOfWork uowService;
        private readonly IMapper mapper;
        private readonly IConfiguration configuration;
        #endregion

        #region Constr
        public AccountController(IUnitOfWork unitfOfWork, IMapper mapper, IConfiguration configuration)
        {
            this.uowService = unitfOfWork;
            this.mapper = mapper;
            this.configuration = configuration;
        }
        #endregion

        #region API Methods
        [HttpPost("login")]
        public async Task<IActionResult> login(AuthenticateRequest model)
        {
            var user = await this.uowService.UserRepository.Authenticate(model.UserName, model.Password);
            if(user == null) {
                return Unauthorized();
            }

            AuthenticateResponse userRes = new AuthenticateResponse { UserName = user.UserName, Token = CreateJWT(user) };
            return Ok(userRes);
        }
        #endregion

        #region Private Methods
        [NonAction]
        private string CreateJWT(User user)
        {
            var secret_Key = configuration.GetSection("AppSettings:Secret_Key").Value;
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret_Key));

            var claims = new Claim[] {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.NameIdentifier,user.Id.ToString())
            };

            var signingCredentials = new SigningCredentials(key,SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(5),
                SigningCredentials = signingCredentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
        #endregion
    }
}