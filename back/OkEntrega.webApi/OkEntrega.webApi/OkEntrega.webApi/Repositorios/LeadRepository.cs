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
    public class LeadRepository : ILeadRepository
    {
        OkEntregasContext ctx = new OkEntregasContext();

        public void Atualizar(int id, Lead leadAtualizado)

        {
            Lead leadBuscado = ctx.Leads.Find(id);

            if (leadAtualizado.Nome != null)
            {
                leadBuscado.Nome = leadAtualizado.Nome;
            }

            if (leadAtualizado.StatusLead != null)
            {
                leadBuscado.StatusLead = leadAtualizado.StatusLead;
            }
            if (leadAtualizado.Email != null)
            {
                leadBuscado.Email = leadAtualizado.Email;
            }
            if (leadAtualizado.Cargo != null)
            {
                leadBuscado.Cargo = leadAtualizado.Cargo;
            }
            if (leadAtualizado.Score != null)
            {
                leadBuscado.Score = leadAtualizado.Score;
            }
            if (leadAtualizado.Telefone != null)
            {
                leadBuscado.Telefone = leadAtualizado.Telefone;
            }
            if (leadAtualizado.Necessidades != null)
            {
                leadBuscado.Necessidades = leadAtualizado.Necessidades;
            }
            if (leadAtualizado.IdEmpresa != null)
            {
                leadBuscado.IdEmpresa = leadAtualizado.IdEmpresa;
            }

            ctx.Leads.Update(leadBuscado);

            ctx.SaveChanges();

        }


        public Lead BuscarPorId(int id)

        {
            return ctx.Leads
            .Select(u => new Lead()
            {
                IdLeads = u.IdLeads,
                Nome = u.Nome,
                Email = u.Email

            })
            .FirstOrDefault(u => u.IdLeads == id);
        }


        public void Cadastrar(Lead novoLead)
        {
            ctx.Leads.Add(novoLead);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Leads.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Lead> Listar()
        {

            return ctx.Leads.Include(e => e.IdEmpresaNavigation)
            .ToList();

        }
    }
}