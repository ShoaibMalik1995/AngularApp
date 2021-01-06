using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Repository
{
    public interface ICityRepository
    {
         Task<IEnumerable<City>> GetCities();
         void AddCity(City city);
         void DeleteCity(int id);
         Task<bool> SaveAsync();
    }
}