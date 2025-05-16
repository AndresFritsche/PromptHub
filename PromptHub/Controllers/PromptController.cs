using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PromptHub.Data;
using PromptHub.Dto;
using PromptHub.Models;

namespace PromptHub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromptController : Controller
    {
        private readonly PromptHubContext _context;
        public PromptController(PromptHubContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<Prompt>> GetPrompts()
        {
            var prompts = await _context.Prompts.ToListAsync();

            return Ok(prompts);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Prompt>> GetPromptById(int id)
        {
            var prompt = await _context.Prompts.FirstOrDefaultAsync(p => p.Id == id);
            if (prompt is null) return NotFound();

            return Ok(prompt);
        }

        [HttpPost("create")]

        public async Task<ActionResult<Prompt>> CreatePrompt(PromptDto dto)
        {
            var prompt = new Prompt
            {
                Title = dto.Title,
                Content = dto.Content
            };
            _context.Prompts.Add(prompt);
            await _context.SaveChangesAsync();
            return Ok(prompt);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Prompt>> UpdatePrompt(int id, PromptDto dto)
        {
            var prompt = await _context.Prompts.FirstOrDefaultAsync(p => p.Id == id);
            if (prompt is null) return NotFound();

            prompt.Title = dto.Title;
            prompt.Content = dto.Content;

            _context.Prompts.Update(prompt);
            await _context.SaveChangesAsync(); 

            return Ok(prompt);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Prompt>> DeletePropmt(int id)
        {
            var prompt = await _context.Prompts.FirstOrDefaultAsync(p => p.Id == id);
            _context.Prompts.Remove(prompt);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
