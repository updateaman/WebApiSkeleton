using System.Web.Mvc;

namespace WebApiSkeleton.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}