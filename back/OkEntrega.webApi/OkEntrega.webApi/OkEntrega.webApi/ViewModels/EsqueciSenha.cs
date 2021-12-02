using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi.ViewModels
{
    public class EsqueciSenha
    {
        [Required(ErrorMessage = "Informe o e-mail do usuário!")]
        public string Email { get; set; }

    }
}
