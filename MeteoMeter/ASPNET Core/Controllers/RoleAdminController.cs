
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using MeteoMeter.Backend.Models;

namespace MeteoMeter.Backend.Controllers
{
	[Authorize]
    public partial class RoleAdminController : Controller
    {
		private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        
        public RoleAdminController()
        {

        }
        
        public RoleAdminController(UserManager<ApplicationUser> userManager,
        RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
			_roleManager = roleManager;
        }
        
        
        //
        // GET: /Roles/
        public ActionResult Index()
        {
            return View(this._roleManager.Roles);
        }
        
        //
        // GET: /Roles/Details/5
        public async Task < ActionResult > Details(string id)
        {
            if (id == null) {
                return new StatusCodeResult((int)HttpStatusCode.BadRequest);
            }
            var role = await _roleManager.FindByIdAsync(id);
            // Get the list of Users in this Role
            var users = new List <ApplicationUser>();
            
            // Get the list of Users in this Role
            foreach( var user in _userManager.Users.ToList())
            {
                if (await _userManager.IsInRoleAsync(user, role.Name))
                {
                    users.Add(user);
                }
            }
            
            ViewBag.Users = users;
            ViewBag.UserCount = users.Count();
            return View(role);
        }
        
        //
        // GET: /Roles/Create
        public ActionResult Create()
        {
            return View();
        }
        
        //
        // POST: /Roles/Create
        [HttpPost]
        public async Task <IActionResult> Create(RoleViewModel roleViewModel)
        {
            if (ModelState.IsValid) {
                var role = new IdentityRole(roleViewModel.Name);
                var roleresult = await _roleManager.CreateAsync(role);
                if (!roleresult.Succeeded) {
                    ModelState.AddModelError("", roleresult.Errors.First().Description);
                    return View();
                }
                return RedirectToAction("Index");
            }
            return View();
        }
        
        //
        // GET: /Roles/Edit/Admin
        public async Task <IActionResult> Edit(string id)
        {
            if (id == null) {
                return new StatusCodeResult((int)HttpStatusCode.BadRequest);
            }
            var role = await _roleManager.FindByIdAsync(id);
            if (role == null) {
                return NotFound();
            }
            RoleViewModel roleModel = new RoleViewModel{ Id = role.Id, Name = role.Name };
            return View(roleModel);
        }
        
        //
        // POST: /Roles/Edit/5
        [HttpPost]

        [ValidateAntiForgeryToken]
        public async Task <IActionResult> Edit([Bind("Name,Id")] RoleViewModel roleModel)
        {
            if (ModelState.IsValid) {
                var role = await _roleManager.FindByIdAsync(roleModel.Id);
                role.Name = roleModel.Name;
                await _roleManager.UpdateAsync(role);
                return RedirectToAction("Index");
            }
            return View();
        }
        
        //
        // GET: /Roles/Delete/5
        public async Task <IActionResult> Delete(string id)
        {
            if (id == null) {
                return new StatusCodeResult((int)HttpStatusCode.BadRequest);
            }
            var role = await _roleManager.FindByIdAsync(id);
            if (role == null) {
                return NotFound();
            }
            return View(role);
        }
        
        //
        // POST: /Roles/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task <IActionResult> DeleteConfirmed(string id, string deleteUser)
        {
            if (ModelState.IsValid) {
                if (id == null) {
                    return new StatusCodeResult((int)HttpStatusCode.BadRequest);
                }
                var role = await _roleManager.FindByIdAsync(id);
                if (role == null) {
                    return NotFound();
                }
                
                if (Security.Roles.GetAll().Any(r => role.Name.Equals(r.Key, StringComparison.OrdinalIgnoreCase)))
                {
                    ModelState.AddModelError("", new ArgumentException("cant_delete_default_role"), null);
                    return View();
                }
                
                
                IdentityResult result;
                if (deleteUser != null) {
                    result = await _roleManager.DeleteAsync(role);
                }
                else {
                    result = await _roleManager.DeleteAsync(role);
                }
                if (!result.Succeeded) {
                    ModelState.AddModelError("", result.Errors.First().Description);
                    return View();
                }
                return RedirectToAction("Index");
            }
            return View();
        }
    }
}
