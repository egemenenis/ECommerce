using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceBackend.Models
{
    [Table("Merchants")]
    public class MerchantModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MerchantId { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        [StringLength(500)]
        public string? Description { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Phone]
        public string? Phone { get; set; }
        public string? Address { get; set; }
        [StringLength(100)]
        public string? City { get; set; }
        public bool? IsVerified { get; set; }
        public string? ProfileImageUrl { get; set; }
        public string? OpeningHours { get; set; }
        public List<PaymentMethodModel>? PaymentMethods { get; set; }
        public List<ShippingMethodModel>? ShippingMethods { get; set; }
        public List<ProductModel>? Products { get; set; }
        public List<DiscountCodeModel>? DiscountCodes { get; set; }
        public List<UserModel>? Users { get; set; }
    }
}
