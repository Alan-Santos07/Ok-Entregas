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
    public class EmpresasController : ControllerBase
    {
        private IEmpresaRepository empresaRepository { get; set; }
       
        public EmpresasController()
        {
            empresaRepository = new EmpresaRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(empresaRepository.Listar());
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpPost]
        public IActionResult Post(Empresa novaEmpresa)
        {
            try
            {
                empresaRepository.Cadastrar(novaEmpresa);
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
                empresaRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Empresa empresaAtualizada)
        {
            try
            {
                empresaRepository.Atualizar(id, empresaAtualizada);
                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
                
            }
        }
    }
}
