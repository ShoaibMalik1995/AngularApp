
using System.Threading.Tasks;
using WebAPI.Interface;
using WebAPI.Data.Repository;

namespace WebAPI.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        public readonly DataContext _dbContext;

        public UnitOfWork(DataContext dc){
            this._dbContext = dc;
        }

        public ICityRepository CityRepository => new CityRepository(_dbContext);

        public IUserRepository UserRepository => new UserRepository(_dbContext);

        public async Task<bool> SaveAsync()
        {
            return await this._dbContext.SaveChangesAsync() > 0;
        }
    }
}