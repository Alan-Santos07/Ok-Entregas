using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OkEntrega.webApi.Contexts;
using OkEntrega.webApi.Domains;
using OkEntrega.webApi.Utils;
using OKEntregas.Interfaces;

namespace OKEntregas.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        OkEntregasContext ctx = new OkEntregasContext();

        public void Atualizar(int id, Usuario usuarioAtualizado)
        {

            Usuario usuarioBuscado = ctx.Usuarios.Find(id);


            if (usuarioAtualizado.Nome != null)
            {
                usuarioBuscado.Nome = usuarioAtualizado.Nome;
            }


            if (usuarioAtualizado.Email != null)
            {
                usuarioBuscado.Email = usuarioAtualizado.Email;
            }


            if (usuarioAtualizado.Senha != null)
            {
                usuarioBuscado.Senha = usuarioAtualizado.Senha;
            }

            ctx.Usuarios.Update(usuarioBuscado);


            ctx.SaveChanges();
        }


        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuarios
            .Select(u => new Usuario()
            {
                IdUsuario = u.IdUsuario,
                Nome = u.Nome,
                Email = u.Email,

            })
            .FirstOrDefault(u => u.IdUsuario == id);
        }


        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);

            novoUsuario.Senha = Password.cripto(novoUsuario.Senha);

            ctx.SaveChanges();
        }


        public void Deletar(int id)
        {
            ctx.Usuarios.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }


        public List<Usuario> Listar()
        {
            return ctx.Usuarios
            
            .ToList();
        }

        public Usuario Login(string email, string senha)
        {
            
            
            Usuario UsuarioBuscado = ctx.Usuarios.FirstOrDefault(o => o.Email == email);

                

            if (!Password.HashesValidation(senha, UsuarioBuscado.Senha))
            {
                return null;
            }

            return UsuarioBuscado;


        }

        public void Verficar()
        {
            Usuario UsuarioBuscado = ctx.Usuarios.FirstOrDefault(o => o.VerificacaoEmail);

            UsuarioBuscado.VerificacaoEmail = true;
            ctx.SaveChanges();
        }
    }
}







        