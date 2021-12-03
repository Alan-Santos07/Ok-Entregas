using System;
using System.Collections.Generic;

#nullable disable

namespace OkEntrega.webApi.Domains
{
    public partial class Lead
    {
        public Lead()
        {
            Contatos = new HashSet<Contato>();
            Reuniaos = new HashSet<Reuniao>();
        }

        public int IdLeads { get; set; }
        public string StatusLead { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Cargo { get; set; }
        public string Score { get; set; }
        public string Telefone { get; set; }
        public string Necessidades { get; set; }
        public int IdEmpresa { get; set; }

        public virtual Empresa IdEmpresaNavigation { get; set; }
        public virtual ICollection<Contato> Contatos { get; set; }
        public virtual ICollection<Reuniao> Reuniaos { get; set; }
    }
}
