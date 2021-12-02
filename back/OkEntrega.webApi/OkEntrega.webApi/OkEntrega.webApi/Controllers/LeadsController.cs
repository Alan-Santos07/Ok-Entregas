using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OkEntrega.webApi.Domains;
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

        [HttpPost]
        public IActionResult Post(Lead novoLead)
        {
            try
            {
                leadRepository.Cadastrar(novoLead);
                return StatusCode(201);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                leadRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Lead leadAtualizado)
        {
            try
            {
                leadRepository.Atualizar(id, leadAtualizado);
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);

            }
        }
    }
}