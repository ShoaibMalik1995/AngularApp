using AutoMapper;
using WebAPI.DTOS;
using WebAPI.Models;

namespace WebAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(){

            CreateMap<City, CityDTO>().ReverseMap();
        }
    }
}