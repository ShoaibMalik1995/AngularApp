using WebAPI.Data;
using WebAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebAPI.Repository
{
    public class CityRepository : ICityRepository
    {
        #region Properties
        private readonly DataContext _dbContext;
        #endregion

        #region Constr
        public CityRepository(DataContext dc){
            this._dbContext = dc;
        }
        #endregion
        
        public void AddCity(City city){
            this._dbContext.Cities.AddAsync(city);
        }
        public void DeleteCity(int id){
            var city = this._dbContext.Cities.Find(id);
            this._dbContext.Cities.Remove(city);
        }
        public async Task<IEnumerable<City>> GetCities(){
            return await this._dbContext.Cities.ToListAsync();
        }
        public async Task<bool> SaveAsync(){
            return await this._dbContext.SaveChangesAsync() > 0;
        }
    }
}