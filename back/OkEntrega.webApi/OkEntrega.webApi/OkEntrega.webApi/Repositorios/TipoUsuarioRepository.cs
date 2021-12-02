using OkEntrega.webApi.Contexts;
using OkEntrega.webApi.Domains;
using OkEntrega.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi.Repositorios
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        OkEntregasContext ctx = new OkEntregasContext();
        public void Atualizar(int id, TipoUsuario tipoUsuarioAtualizado)
        {
            throw new NotImplementedException();
        }

        public TipoUsuario BuscarPorId(int id)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(TipoUsuario novoTipoUsuario)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

        public List<TipoUsuario> Listar()
        {
            return ctx.TipoUsuarios
            .ToList();
        }

    }
}
