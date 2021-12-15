using Microsoft.EntityFrameworkCore;
using OkEntrega.webApi.Contexts;
using OkEntrega.webApi.Domains;
using OkEntrega.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi.Repositorios
{
    public class ContatoRepository : IContatoRepository
    {
        OkEntregasContext ctx = new OkEntregasContext();
        public void Atualizar(int id, Contato contatoAtualizado)
        {
            Contato contatoBuscado = ctx.Contatos.Find(id);

            if (contatoAtualizado.IdEmpresa != null)
            {
                contatoBuscado.IdEmpresa = contatoAtualizado.IdEmpresa;
            }

            if (contatoAtualizado.IdLeads != null)
            {
                contatoBuscado.IdLeads = contatoAtualizado.IdLeads;
            }
            if (contatoAtualizado.Titulo != null)
            {
                contatoBuscado.Titulo = contatoAtualizado.Titulo;
            }
            if (contatoAtualizado.Descricao != null)
            {
                contatoBuscado.Descricao = contatoAtualizado.Descricao;
            }
            if (contatoAtualizado.DataCriacao != null)
            {
                contatoBuscado.DataCriacao = contatoAtualizado.DataCriacao;
            }
            if (contatoAtualizado.Favoritar != null)
            {
                contatoBuscado.Favoritar = contatoAtualizado.Favoritar;
            }
            

            ctx.Contatos.Update(contatoBuscado);

            ctx.SaveChanges();
        }

        public Contato BuscarPorId(int id)
        {
            return ctx.Contatos
            .Select(u => new Contato()
            {
                IdContato = u.IdContato,
                Descricao = u.Descricao,
                Titulo = u.Titulo

            })
            .FirstOrDefault(u => u.IdContato == id);
        }

        public void Cadastrar(Contato novoContato)
        {
            ctx.Contatos.Add(novoContato);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Contatos.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public void Favoritar(int id, string favoritar)
        {
            Contato contatoBuscado = ctx.Contatos
                .FirstOrDefault(c => c.IdContato == id);

            switch (favoritar)
            {
                case "1":
                    contatoBuscado.Favoritar = true;
                    break;

                case "2":
                    contatoBuscado.Favoritar = false;
                    break;

            }
            ctx.Contatos.Update(contatoBuscado);
            ctx.SaveChanges();
            
        }

        public List<Contato> Listar()
        {
            return ctx.Contatos.Include(e => e.IdEmpresaNavigation).Include(e => e.IdLeadsNavigation).OrderByDescending(d => d.DataCriacao)
            .ToList();
        }

        public List<Contato> ListarContatosFavoritos()
        {
            return ctx.Contatos.Include(e => e.IdEmpresaNavigation).Include(e => e.IdLeadsNavigation).OrderByDescending(d => d.DataCriacao).Where(x => x.Favoritar == true).ToList();
        }
    }
}
