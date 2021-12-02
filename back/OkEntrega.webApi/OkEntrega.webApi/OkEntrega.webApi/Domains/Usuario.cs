using System;
using System.Collections.Generic;

#nullable disable

namespace OkEntrega.webApi.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Reuniaos = new HashSet<Reuniao>();
        }

        public int IdUsuario { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public bool VerificacaoEmail { get; set; }
        public int IdTipoUsuario { get; set; }

        public virtual TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public virtual ICollection<Reuniao> Reuniaos { get; set; }
    }
}
