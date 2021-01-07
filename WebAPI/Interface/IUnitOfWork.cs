using System.Threading.Tasks;

namespace WebAPI.Interface
{
    public interface IUnitOfWork
    {
         ICityRepository CityRepository { get; }
         Task<bool> SaveAsync();
    }
}