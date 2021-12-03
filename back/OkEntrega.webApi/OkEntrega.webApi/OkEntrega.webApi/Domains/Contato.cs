using System;
using System.Collections.Generic;

#nullable disable

namespace OkEntrega.webApi.Domains
{
    public partial class Contato
    {
        public int IdContato { get; set; }
        public int IdEmpresa { get; set; }
        public int IdLeads { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public DateTime DataCriacao { get; set; }
        public bool Favoritar { get; set; }

        public virtual Empresa IdEmpresaNavigation { get; set; }
        public virtual Lead IdLeadsNavigation { get; set; }
    }
}
