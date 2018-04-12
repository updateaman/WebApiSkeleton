using System.Data.Entity;

namespace WebApi.Models
{
    public interface IStoreDbContext
    {
        IDbSet<Product> Products { get; set; }
    }
}
