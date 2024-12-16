using Microsoft.AspNetCore.Mvc;
using EcommerceBackend.DataAccess;
using EcommerceBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace EcommerceBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentMethodController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public PaymentMethodController(DatabaseContext context)
        {
            _context = context;
        }

 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PaymentMethodModel>>> GetPaymentMethods()
        {
            return await _context.paymentMethods.ToListAsync();
        }

 
        [HttpGet("{id}")]
        public async Task<ActionResult<PaymentMethodModel>> GetPaymentMethod(int id)
        {
            var paymentMethod = await _context.paymentMethods.FindAsync(id);

            if (paymentMethod == null)
            {
                return NotFound();
            }

            return paymentMethod;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymentMethod(int id, PaymentMethodModel paymentMethod)
        {
            if (id != paymentMethod.PaymentMethodId)
            {
                return BadRequest();
            }

            _context.Entry(paymentMethod).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentMethodExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

 
        [HttpPost]
        public async Task<ActionResult<PaymentMethodModel>> PostPaymentMethod(PaymentMethodModel paymentMethod)
        {
            _context.paymentMethods.Add(paymentMethod);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPaymentMethod", new { id = paymentMethod.PaymentMethodId }, paymentMethod);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<PaymentMethodModel>> DeletePaymentMethod(int id)
        {
            var paymentMethod = await _context.paymentMethods.FindAsync(id);
            if (paymentMethod == null)
            {
                return NotFound();
            }

            _context.paymentMethods.Remove(paymentMethod);
            await _context.SaveChangesAsync();

            return paymentMethod;
        }

        private bool PaymentMethodExists(int id)
        {
            return _context.paymentMethods.Any(e => e.PaymentMethodId == id);
        }
    }
}
