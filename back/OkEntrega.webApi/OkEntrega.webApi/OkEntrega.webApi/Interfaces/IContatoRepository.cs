using OkEntrega.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi.Interfaces
{
    public interface IContatoRepository
    {
        /// <summary>
        /// Lista todos os usuários
        /// </summary>
        /// <returns>Uma lista de usuários</returns>
        List<Contato> Listar();

        /// <summary>
        /// Busca um usuário através do ID
        /// </summary>
        Contato BuscarPorId(int id);

        void Cadastrar(Contato novoContato);

        /// <summary>
        /// Atualiza um usuário existente
        /// </summary>
        void Atualizar(int id, Contato contatoAtualizado);

        /// <summary>
        /// Deleta um usuário 
        /// </summary>
        void Deletar(int id);

    }
}
