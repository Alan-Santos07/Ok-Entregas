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
    public class TiposUsuariosController : ControllerBase
    {
        private ITipoUsuarioRepository tipoUsuarioRepository { get; set; }

        public TiposUsuariosController()
        {
            tipoUsuarioRepository = new TipoUsuarioRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(tipoUsuarioRepository.Listar());
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
