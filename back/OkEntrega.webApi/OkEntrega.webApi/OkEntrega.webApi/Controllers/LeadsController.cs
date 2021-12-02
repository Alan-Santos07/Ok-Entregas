using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OkEntrega.webApi.Interfaces;
using OkEntrega.webApi.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LeadsController : ControllerBase
    {
        private ILeadRepository leadRepository { get; set; }

        public LeadsController()
        {
            leadRepository = new LeadRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(leadRepository.Listar());
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
