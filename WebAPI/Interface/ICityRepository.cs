using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interface
{
    public interface ICityRepository
    {
         Task<IEnumerable<City>> GetCities();
         void AddCity(City city);
         void DeleteCity(int id);
         void UpdateCity(City city);     
    }
}