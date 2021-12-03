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
    public class ContatosController : ControllerBase
    {
        private IContatoRepository contatoRepository { get; set; }

        public ContatosController()
        {
            contatoRepository = new ContatoRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(contatoRepository.Listar());
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpPost]
        public IActionResult Post(Contato novoContato)
        {
            try
            {
                contatoRepository.Cadastrar(novoContato);
                return StatusCode(201);
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                contatoRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id, Contato contatoAtualizado)
        {
            try
            {
                contatoRepository.Atualizar(id, contatoAtualizado);
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);

            }
        }

    }
}
