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
        List<Lead> Listar();


        /// <summary>
        /// Busca um usuário através do ID
        /// </summary>

        Lead BuscarPorId(int id);

        void Cadastrar(Lead novoLead);




        /// <summary>
        /// Atualiza um usuário existente
        /// </summary>

        void Atualizar(int id, Lead leadAtualizado);


        /// <summary>
        /// Deleta um usuário 
        /// </summary>
        void Deletar(int id);
    }
}