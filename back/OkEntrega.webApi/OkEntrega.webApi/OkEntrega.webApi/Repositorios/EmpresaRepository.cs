using OkEntrega.webApi.Contexts;
using OkEntrega.webApi.Domains;
using OkEntrega.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi.Repositorios
{
    public class EmpresaRepository : IEmpresaRepository
    {
        OkEntregasContext ctx = new OkEntregasContext();
        public void Atualizar(int id, Empresa empresaAtualizada)
        {
            Empresa empresaBuscada = ctx.Empresas.Find(id);

            if(empresaAtualizada.NomeEmpresa != null)
            {
                empresaBuscada.NomeEmpresa = empresaAtualizada.NomeEmpresa;
            }

            if (empresaAtualizada.NumeroDeFuncionarios != null)
            {
                empresaBuscada.NumeroDeFuncionarios = empresaAtualizada.NumeroDeFuncionarios;
            }
            if (empresaAtualizada.NumeroDeTelefone != null)
            {
                empresaBuscada.NumeroDeTelefone = empresaAtualizada.NumeroDeTelefone;
            }
            if (empresaAtualizada.EmailEmpresa != null)
            {
                empresaBuscada.EmailEmpresa = empresaAtualizada.EmailEmpresa;
            }
            if (empresaAtualizada.NomeFantasia != null)
            {
                empresaBuscada.NomeFantasia = empresaAtualizada.NomeFantasia;
            }
            if (empresaAtualizada.Cnpj != null)
            {
                empresaBuscada.Cnpj = empresaAtualizada.Cnpj;
            }
            if (empresaAtualizada.SegmentoDeMercado != null)
            {
                empresaBuscada.SegmentoDeMercado = empresaAtualizada.SegmentoDeMercado;
            }

            ctx.Empresas.Update(empresaBuscada);

            ctx.SaveChanges();


        }

        public Empresa BuscarPorId(int id)
        {
            return ctx.Empresas
            .Select(u => new Empresa()
            {
                IdEmpresa = u.IdEmpresa,
                NomeEmpresa = u.NomeEmpresa,
                SegmentoDeMercado = u.SegmentoDeMercado

            })
            .FirstOrDefault(u => u.IdEmpresa == id);
        }

        public void Cadastrar(Empresa novaEmpresa)
        {
            ctx.Empresas.Add(novaEmpresa);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Empresas.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Empresa> Listar()
        {
            return ctx.Empresas
            .ToList();
        }
    }
}
