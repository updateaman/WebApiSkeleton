using System.Data.Entity;

namespace WebApi.Models
{
    public class StoreDbContext : DbContext, IStoreDbContext
    {
        public StoreDbContext() : base("name=DefaultConnectionString")
        {

        }

        public IDbSet<Product> Products { get; set; }
    }
}