using System.Linq;
using Moq;
using WebApi.Controllers;
using WebApi.Models;
using Xunit;

namespace WebApi.Tests.Controllers
{
    public class ValuesControllerTests
    {
        [Fact]
        public void Get_returns_enumerable_of_two_strings()
        {
            var storeDbContextMock = new Mock<IStoreDbContext>();
            var controller = new ValuesController(storeDbContextMock.Object);
            var result = controller.Get();

            Assert.Equal(2, result.Count());
        }
    }
}
