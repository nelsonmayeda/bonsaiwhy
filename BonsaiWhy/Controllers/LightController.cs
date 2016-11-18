using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BonsaiWhy.Controllers
{
    [RoutePrefix("Light")]
    public class LightController : Controller
    {
        [Route("")]
        [Route("Index")]
        [Route("Calculator")]
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