using System;
using System.Collections.Generic;

#nullable disable

namespace OkEntrega.webApi.Domains
{
    public partial class Empresa
    {
        public Empresa()
        {
            Contatos = new HashSet<Contato>();
            Leads = new HashSet<Lead>();
        }

        public int IdEmpresa { get; set; }
        public string NomeEmpresa { get; set; }
        public int NumeroDeFuncionarios { get; set; }
        public string NumeroDeTelefone { get; set; }
        public string EmailEmpresa { get; set; }
        public string NomeFantasia { get; set; }
        public string Cnpj { get; set; }
        public string SegmentoDeMercado { get; set; }

        public virtual ICollection<Contato> Contatos { get; set; }
        public virtual ICollection<Lead> Leads { get; set; }
    }
}
