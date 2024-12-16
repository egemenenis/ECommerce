using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcommerceBackend.Models
{
    [Table("ShippingMethods")]
    public class ShippingMethodModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ShippingMethodId { get; set; }
        public string MethodName { get; set; }
        public string Details { get; set; }
    }
}
