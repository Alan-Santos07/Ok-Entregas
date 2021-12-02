using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi.Utils
{
    public static class Password
    {

        // Retorna Senha verificado
        public static string cripto(string senha)
        {
            return BCrypt.Net.BCrypt.HashPassword(senha);
        }

        public static bool HashesValidation(string senha, string hash)
        {
            return BCrypt.Net.BCrypt.Verify(senha, hash);
        }        
    }
}
