using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Interface;
using AutoMapper;
using System.Collections.Generic;
using WebAPI.DTOS;
using Microsoft.AspNetCore.JsonPatch;

namespace WebAPI.Controllers
{
    public class CityController : BaseController
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

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateCity(int id, CityDTO city)
        {
            if(id != city.Id)
                return BadRequest("Update not allowed.");

            var model = await this.uowService.CityRepository.FindCity(id);
            if (model == null)
                return BadRequest("Update not allowed.");

            model.LastUpdatedBy = 1;
            model.LastUpdateOn = DateTime.Now;
            this.mapper.Map(city,model);
            await this.uowService.SaveAsync();
            return Ok(city);
        }

        /// <summary>
        /// Not Recommended in .Net Core
        /// | No Newtson Json in .NetCore | No Support of Json.Patch in .Net5
        /// | .Net Core Use System.Text.Json (Better Performance, Security, Standard Json Compliance)
        /// Patch Request Formate, we are using op replace, but there are other options as well like add, remove, move, copy, test
        /// [ {"op": "replace", "path": "/Name", "value": "abc"}, {"op": "replace", "path": "/Country", "value": "xyz"} ]
        /// </summary>
        /// <param name="id"></param>
        /// <param name="cityToPatch"></param>
        /// <returns></returns>
        [HttpPatch("update/{id}")]
        public async Task<IActionResult> UpdateCityPatch(int id, JsonPatchDocument<City> cityToPatch)
        {
            var model = await this.uowService.CityRepository.FindCity(id);
            if (model == null)
                return BadRequest("Update not allowed.");

            model.LastUpdatedBy = 1;
            model.LastUpdateOn = DateTime.Now;
            cityToPatch.ApplyTo(model, ModelState);
            await this.uowService.SaveAsync();
            return Ok(cityToPatch);
        }

        [HttpPut("UpdateCityName/{id}")]
        public async Task<IActionResult> UpdateCityName(int id, CityUpdateDTO city)
        { 
            var model = await this.uowService.CityRepository.FindCity(id);
            if (model == null)
                return BadRequest("Update not allowed.");

            model.LastUpdatedBy = 1;
            model.LastUpdateOn = DateTime.Now;
            this.mapper.Map(city,model);
            await this.uowService.SaveAsync();
            return Ok(city);
        }

    }
}