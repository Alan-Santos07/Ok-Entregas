using OkEntrega.webApi.Contexts;
using OkEntrega.webApi.Domains;
using OkEntrega.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi.Repositorios
{
    public class LeadRepository : ILeadRepository
    {
        OkEntregasContext ctx = new OkEntregasContext();

<<<<<<< HEAD
        public void Atualizar(int id, Lead leadAtualizado)
=======
        public void Atualizar(int id, UsuarioLead leadAtualizado)
>>>>>>> front-end
        {
            throw new NotImplementedException();
        }

<<<<<<< HEAD
        public Lead BuscarPorId(int id)
=======
        public UsuarioLead BuscarPorId(int id)
>>>>>>> front-end
        {
            throw new NotImplementedException();
        }

<<<<<<< HEAD
        public void Cadastrar(Lead novoLead)
=======
        public void Cadastrar(UsuarioLead novoLead)
>>>>>>> front-end
        {
            throw new NotImplementedException();
        }

        public void Deletar(int id)
        {
            throw new NotImplementedException();
        }

<<<<<<< HEAD
        public List<Lead> Listar()
        {
            throw new NotImplementedException();
=======
        public List<UsuarioLead> Listar()
        {
            return ctx.UsuarioLeads.ToList();
>>>>>>> front-end
        }
    }
}
