using OkEntrega.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi.Interfaces
{
    public interface ILeadRepository
    {
        /// <summary>
        /// Lista todos os usuários
        /// </summary>
        /// <returns>Uma lista de usuários</returns>
<<<<<<< HEAD
        List<Lead> Listar();
=======
        List<UsuarioLead> Listar();
>>>>>>> front-end

        /// <summary>
        /// Busca um usuário através do ID
        /// </summary>
<<<<<<< HEAD
        Lead BuscarPorId(int id);

        void Cadastrar(Lead novoLead);
=======
        UsuarioLead BuscarPorId(int id);

        void Cadastrar(UsuarioLead novoLead);
>>>>>>> front-end

        /// <summary>
        /// Atualiza um usuário existente
        /// </summary>
<<<<<<< HEAD
        void Atualizar(int id, Lead leadAtualizado);
=======
        void Atualizar(int id, UsuarioLead leadAtualizado);
>>>>>>> front-end

        /// <summary>
        /// Deleta um usuário 
        /// </summary>
        void Deletar(int id);
    }
}
