using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OKEntregas.Interfaces;
using OKEntregas.Repositories;

using OkEntrega.webApi.Domains;
using OkEntrega.webApi.Models;
using OkEntrega.webApi.Services;

namespace WallFertas.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository usuariosRepository { get; set; }
        private readonly IMailService _mailService;

        public UsuarioController(IMailService mailService)
        {
            usuariosRepository = new UsuarioRepository();
            _mailService = mailService;
        }

        //Listar
        [HttpGet]
        //[Authorize(Roles = "1")]
        public IActionResult Get()
        {
            try
            {
                return Ok(usuariosRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //Buscar Por Id
        [HttpGet("{id}")]
        //[Authorize(Roles = "1")]
        public IActionResult GetById(int id)
        {
            try
            {
                // Retora a resposta da requisição fazendo a chamada para o método
                return Ok(usuariosRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        //Cadastrar
        [HttpPost]
        //[Authorize(Roles = "1")]
        public IActionResult Post(Usuario novoUsuario, [FromForm]WelcomeRequest request, string emailUser)
        {
            try
            {
                emailUser = novoUsuario.Email;

                _mailService.SendWelcomeEmailAsync(request, emailUser);


                usuariosRepository.Cadastrar(novoUsuario);

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost("verificar")]
        public IActionResult Post()
        {
            try
            {
                usuariosRepository.Verficar();
                return Ok();
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        //Atualizar
        [HttpPut("{id}")]
        //[Authorize(Roles = "1")]
        public IActionResult Put(int id, Usuario usuarioAtualizado)
        {
            try
            {
                usuariosRepository.Atualizar(id, usuarioAtualizado);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        //Deletar
        [HttpDelete("{id}")]
        //[Authorize(Roles = "1")]
        public IActionResult Delete(int id)
        {
            try
            {
                usuariosRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }


    }
}
