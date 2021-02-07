using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interface
{
    public interface IUserRepository
    {
         Task<User> Authenticate(string username,string password);
    }
}