using System.Threading.Tasks;
using WebAPI.Interface;
using WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Data.Repository
{
    public class UserRepository : IUserRepository
    {
        #region Properties
        private readonly DataContext _dbContext;
        #endregion

        #region Constr
        public UserRepository(DataContext dc){
            this._dbContext = dc;
        }
        #endregion

        public async Task<User> Authenticate(string username, string password)
        {
            return await this._dbContext.Users.FirstOrDefaultAsync(u => u.UserName == username && u.Password == password);
        }
    }
}