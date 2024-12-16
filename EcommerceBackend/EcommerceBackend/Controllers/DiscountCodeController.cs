using Microsoft.AspNetCore.Mvc;
using EcommerceBackend.DataAccess;
using EcommerceBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace EcommerceBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiscountCodeController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public DiscountCodeController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<DiscountCodeModel>>> GetDiscountCodes()
        {
            return await _context.discountCodes.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<DiscountCodeModel>> GetDiscountCode(int id)
        {
            var discountCode = await _context.discountCodes.FindAsync(id);

            if (discountCode == null)
            {
                return NotFound();
            }

            return discountCode;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutDiscountCode(int id, DiscountCodeModel discountCode)
        {
            if (id != discountCode.DiscountCodeId) // Yeni alan ismi ile uyumlu hale getirdik
            {
                return BadRequest();
            }

            _context.Entry(discountCode).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DiscountCodeExists(id))
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
        public async Task<ActionResult<DiscountCodeModel>> PostDiscountCode(DiscountCodeModel discountCode)
        {
            _context.discountCodes.Add(discountCode);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDiscountCode", new { id = discountCode.DiscountCodeId }, discountCode);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<DiscountCodeModel>> DeleteDiscountCode(int id)
        {
            var discountCode = await _context.discountCodes.FindAsync(id);
            if (discountCode == null)
            {
                return NotFound();
            }

            _context.discountCodes.Remove(discountCode);
            await _context.SaveChangesAsync();

            return discountCode;
        }

        private bool DiscountCodeExists(int id)
        {
            return _context.discountCodes.Any(e => e.DiscountCodeId == id);
        }
    }
}
