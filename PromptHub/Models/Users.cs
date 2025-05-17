using System.ComponentModel.DataAnnotations;

namespace PromptHub.Models
{
    public class Users
    {
        [Key]
        public int Id { get; set; }


        [Required(ErrorMessage = "Name is required")]
        [MaxLength(50, ErrorMessage = "max 50 characters allowed.")]
        public string Name { get; set; }


        [Required(ErrorMessage = "last name is required")]
        [MaxLength(50, ErrorMessage = "max 50 characters allowed.")]
        public string LastName { get; set; }


        [Required(ErrorMessage = "email is required")]
        [DataType(DataType.EmailAddress)]
        public string EmailAddress { get; set; }


        [Required(ErrorMessage = "password is required")]
        [DataType(DataType.Password)]
        [MinLength(12, ErrorMessage ="minimum 12 characters")]
        public string PasswordHash { get; set; }

    }
}
