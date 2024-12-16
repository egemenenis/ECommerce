using Microsoft.AspNetCore.Mvc;
using EcommerceBackend.DataAccess;
using EcommerceBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace EcommerceBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShippingMethodController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public ShippingMethodController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShippingMethodModel>>> GetShippingMethods()
        {
            return await _context.shippingMethods.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<ShippingMethodModel>> GetShippingMethod(int id)
        {
            var shippingMethod = await _context.shippingMethods.FindAsync(id);

            if (shippingMethod == null)
            {
                return NotFound();
            }

            return shippingMethod;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutShippingMethod(int id, ShippingMethodModel shippingMethod)
        {
            if (id != shippingMethod.ShippingMethodId)
            {
                return BadRequest();
            }

            _context.Entry(shippingMethod).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShippingMethodExists(id))
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
        public async Task<ActionResult<ShippingMethodModel>> PostShippingMethod(ShippingMethodModel shippingMethod)
        {
            _context.shippingMethods.Add(shippingMethod);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetShippingMethod", new { id = shippingMethod.ShippingMethodId}, shippingMethod);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<ShippingMethodModel>> DeleteShippingMethod(int id)
        {
            var shippingMethod = await _context.shippingMethods.FindAsync(id);
            if (shippingMethod == null)
            {
                return NotFound();
            }

            _context.shippingMethods.Remove(shippingMethod);
            await _context.SaveChangesAsync();

            return shippingMethod;
        }

        private bool ShippingMethodExists(int id)
        {
            return _context.shippingMethods.Any(e => e.ShippingMethodId == id);
        }
    }
}
