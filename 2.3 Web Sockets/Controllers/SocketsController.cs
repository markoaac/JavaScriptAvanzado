using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace _2._3_Web_Sockets.Controllers
{
    public class SocketsController : Controller
    {
        public IActionResult Inicio(){
            return View();
        }
    }
}