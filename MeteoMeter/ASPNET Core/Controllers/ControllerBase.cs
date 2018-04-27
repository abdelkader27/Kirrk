
using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MeteoMeter.Backend.Models;

namespace MeteoMeter.Backend.Controllers
{
    public abstract partial class ControllerBase<T> : Controller where T : class
    {
		public ControllerBase()
        {
        }
    }
}
