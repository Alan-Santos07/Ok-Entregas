using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using OKEntregas.Interfaces;
using OKEntregas.Repositories;
using OKEntregas.ViewModels;
using OkEntrega.webApi.Domains;

namespace OKEntregas.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository usuarioRepository { get; set; }

        /// <summary>
        /// Instancia este objeto para que haja a referência aos métodos no repositório
        /// </summary>
        public LoginController()
        {
            usuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Valida o usuário
        /// </summary>
        /// <param name="login">Objeto login que contém o e-mail e a senha do usuário</param>
        /// <returns>Retorna um token com as informações do usuário</returns>
        /// dominio/api/Login
        [HttpPost]
        public IActionResult Post(LoginViewModel login)
        {
            try
            {
                Usuario usuarioBuscado = usuarioRepository.Login(login.Email, login.Senha);

                // Caso não encontre nenhum usuário com o e-mail e senha informados
                if (usuarioBuscado == null)
                {
                    // Retorna NotFound com uma mensagem de erro
                    return NotFound("E-mail ou senha inválidos!");
                }


                var claims = new[]
                {
                    // Armazena na Claim o e-mail do usuário autenticado
                    new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Email, usuarioBuscado.Email),

                    // Armazena na Claim o ID do usuário autenticado
                    new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),

                    // Armazena na Claim o nome do usuário que foi autenticado
                    // new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Typ, usuarioBuscado.IdTipoUsuarioNavigation.IdTipoUsuario.ToString()),
                   new Claim("role", usuarioBuscado.IdTipoUsuario.ToString())
                };

                // Define a chave de acesso ao token
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("wallfertas-chave-autenticacao"));

                // Define as credenciais do token - Header
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                // Gera o token
                var token = new JwtSecurityToken(
                    issuer: "OKEntregas.webApi",            // emissor do token
                    audience: "OKEntregas.webApi",          // destinatário do token
                    claims: claims,                         // dados definidos acima
                    expires: DateTime.Now.AddMinutes(30),   // tempo de expiração
                    signingCredentials: creds               // credenciais do token
                );

                // Retorna Ok com o token
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
