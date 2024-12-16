using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Security.Principal;
using Microsoft.Extensions.Options;
using EcommerceBackend.Models;

namespace EcommerceBackend.DataAccess
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<ProductModel> products { get; set; }
        public DbSet<UserModel> users { get; set; }
        public DbSet<MerchantModel> merchants { get; set; }
        public DbSet<PaymentMethodModel> paymentMethods { get; set; }
        public DbSet<ShippingMethodModel> shippingMethods { get; set; }
        public DbSet<DiscountCodeModel> discountCodes { get; set; }
    }
}

