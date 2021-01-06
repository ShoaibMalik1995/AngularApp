using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Data;
using WebAPI.Repository;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        #region Properties
        private readonly ICityRepository _cityService;
        #endregion

        #region Constr
        public CityController(ICityRepository cityRepository)
        {
            this._cityService = cityRepository;
        }
        #endregion

        
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            var _citiesList = await this._cityService.GetCities();
            return Ok(_citiesList);
        }

        [HttpPost("add")]
        [HttpPost("add/{cityname}")]
        public async Task<IActionResult> AddCity(string cityname)
        {
            City city = new City { Name = cityname };
            this._cityService.AddCity(city);
            await this._cityService.SaveAsync();
            return Ok(city);
        }

        [HttpPost("post")]
        public async Task<IActionResult> AddCity(City city)
        {
            this._cityService.AddCity(city);
            await this._cityService.SaveAsync();
            return Ok(city);
        }

        [HttpGet("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            this._cityService.DeleteCity(id);
            await this._cityService.SaveAsync();
            return Ok(id);
        }

    }
}