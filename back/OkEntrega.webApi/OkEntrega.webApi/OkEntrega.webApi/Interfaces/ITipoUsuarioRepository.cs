using OkEntrega.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi.Interfaces
{
    public interface ITipoUsuarioRepository
    {
        /// <summary>
        /// Lista todos os usuários
        /// </summary>
        /// <returns>Uma lista de usuários</returns>
        List<TipoUsuario> Listar();

        /// <summary>
        /// Busca um usuário através do ID
        /// </summary>
        TipoUsuario BuscarPorId(int id);

     
        void Cadastrar(TipoUsuario novoTipoUsuario);

        /// <summary>
        /// Atualiza um usuário existente
        /// </summary>
        void Atualizar(int id, TipoUsuario tipoUsuarioAtualizado);

        /// <summary>
        /// Deleta um usuário 
        /// </summary>
        void Deletar(int id);

        /// <summary>
        /// Valida o usuário
        /// </summary>
    }
}
