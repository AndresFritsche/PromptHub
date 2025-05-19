using Microsoft.AspNetCore.Mvc;
using PromptHub.Data;

namespace PromptHub.Controllers
{
    [Route("/user/register")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly PromptHubContext _context;

        public AuthController(PromptHubContext context)
        {
            _context = context;
        } 
    }
}
