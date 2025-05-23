using Microsoft.EntityFrameworkCore;
using PromptHub.Models;

namespace PromptHub.Data
{
    public class PromptHubContext : DbContext
    {
        public PromptHubContext(DbContextOptions<PromptHubContext> options) : base(options) { }

        public DbSet<Prompt> Prompts { get; set; }

        public DbSet<Users> Users { get; set; }

        public DbSet<Category> Categories { get; set; }
    }
}
