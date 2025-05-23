namespace PromptHub.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        public ICollection<Prompt> Prompts { get; set; } = new List<Prompt>();
    }
}
