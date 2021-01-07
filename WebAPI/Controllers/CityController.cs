using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Interface;
using AutoMapper;
using System.Collections.Generic;
using WebAPI.DTOS;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        #region Properties
        private readonly IUnitOfWork uowService;
        private readonly IMapper mapper;
        #endregion

        #region Constr
        public CityController(IUnitOfWork unitfOfWork, IMapper mapper)
        {
            this.uowService = unitfOfWork;
            this.mapper = mapper;
        }
        #endregion

        
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            var _citiesList = await this.uowService.CityRepository.GetCities();
            var cityList = this.mapper.Map<IEnumerable<CityDTO>>(_citiesList);
            return Ok(cityList);
        }

        [HttpPost("add")]
        [HttpPost("add/{cityname}")]
        public async Task<IActionResult> AddCity(string cityname)
        {
            City city = new City { Name = cityname };
            this.uowService.CityRepository.AddCity(city);
            await this.uowService.SaveAsync();
            return Ok(city);
        }

        [HttpPost("post")]
        public async Task<IActionResult> AddCity(CityDTO city)
        {
            var model = this.mapper.Map<City>(city);
            this.uowService.CityRepository.AddCity(model);
            await this.uowService.SaveAsync();
            return Ok(this.mapper.Map<CityDTO>(model));
        }

        [HttpGet("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            this.uowService.CityRepository.DeleteCity(id);
            await this.uowService.SaveAsync();
            return Ok(id);
        }

    }
}