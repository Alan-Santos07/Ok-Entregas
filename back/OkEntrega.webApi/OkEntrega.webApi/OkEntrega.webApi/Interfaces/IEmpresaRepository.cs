using OkEntrega.webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OkEntrega.webApi.Interfaces
{
    public interface IEmpresaRepository
    {
        /// <summary>
        /// Lista todos os usuários
        /// </summary>
        /// <returns>Uma lista de usuários</returns>
        List<Empresa> Listar();

        /// <summary>
        /// Busca um usuário através do ID
        /// </summary>
        Empresa BuscarPorId(int id);

        void Cadastrar(Empresa novaEmpresa);

        /// <summary>
        /// Atualiza um usuário existente
        /// </summary>
        void Atualizar(int id, Empresa empresaAtualizada);

        /// <summary>
        /// Deleta um usuário 
        /// </summary>
        void Deletar(int id);

    }
}
