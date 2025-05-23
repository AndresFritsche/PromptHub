using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PromptHub.Data;
using PromptHub.Dto;
using PromptHub.Dto.Category;
using PromptHub.Models;

namespace PromptHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : Controller
    {
        private readonly PromptHubContext _context;

        public CategoryController(PromptHubContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<string>>> GetAll()
        {
            var prompts = await _context.Categories.ToListAsync();
            return Ok(prompts);
        }

        [HttpPost]
        public async Task<ActionResult<Category>> CreateCategory(CategoryCreateDto dto)
        {
            var category = new Category { Title = dto.Title };

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAll), new { id = category.Id }, category);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Category>> UpdateCategory(CategoryUpdateDto dto, int id)
        {
            var category = await _context.Categories.FirstOrDefaultAsync(c => c.Id == id);

            if (category is null) return NotFound();

            category.Title = dto.Title;

            await _context.SaveChangesAsync();

            return Ok(category);
        }
    }
}
