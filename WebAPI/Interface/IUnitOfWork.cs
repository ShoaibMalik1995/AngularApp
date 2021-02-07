using System.Threading.Tasks;

namespace WebAPI.Interface
{
    public interface IUnitOfWork
    {
         ICityRepository CityRepository { get; }
         IUserRepository UserRepository { get; }
         Task<bool> SaveAsync();
    }
}