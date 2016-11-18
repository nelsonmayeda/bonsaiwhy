using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BonsaiWhy.Controllers
{
    [RoutePrefix("Hormone")]
    public class HormoneController : Controller
    {
        [Route("")]
        [Route("Home")]
        [Route("Index")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("About")]
        public ActionResult About()
        {
            return View();
        }

    }
}