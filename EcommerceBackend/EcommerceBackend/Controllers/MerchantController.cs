using Microsoft.AspNetCore.Mvc;
using EcommerceBackend.DataAccess;
using EcommerceBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace EcommerceBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MerchantController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public MerchantController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<MerchantModel>>> GetMerchants()
        {
            return await _context.merchants.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<MerchantModel>> GetMerchant(int id)
        {
            var merchant = await _context.merchants.FindAsync(id);

            if (merchant == null)
            {
                return NotFound();
            }

            return merchant;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutMerchant(int id, MerchantModel merchant)
        {
            if (id != merchant.MerchantId)
            {
                return BadRequest();
            }

            _context.Entry(merchant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MerchantExists(id))
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
        public async Task<ActionResult<MerchantModel>> PostMerchant(MerchantModel merchant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.merchants.Add(merchant);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMerchant", new { id = merchant.MerchantId }, merchant);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<MerchantModel>> DeleteMerchant(int id)
        {
            var merchant = await _context.merchants.FindAsync(id);
            if (merchant == null)
            {
                return NotFound();
            }

            _context.merchants.Remove(merchant);
            await _context.SaveChangesAsync();

            return merchant;
        }

        private bool MerchantExists(int id)
        {
            return _context.merchants.Any(e => e.MerchantId == id);
        }
    }
}
