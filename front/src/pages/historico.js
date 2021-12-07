import React, { Component } from 'react';
import axios from 'axios';

import '../css/base-style.css'
import '../css/historico.css'
import Side from '../components/side-bar'
import Email from '../components/email'

export default class Historico extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listaContatos: [],
            idContatoSelecionado : 0,
        }
    }

    buscaContatos = () => {
        axios("http://localhost:5000/api/Contatos")
        .then(resposta => {
            if (resposta.status === 200) {
                this.setState({ listaContatos: resposta.data})

            }
            console.log(this.state.listaContatos)
        })
        .catch(erro => console.log(erro));
    }

    excluirContato = async (id) => {
     

    await axios.delete('http://localhost:5000/api/contatos/'+id)
    .then(resposta =>{
        if (resposta.status === 204) {
            console.log(id)
            console.log("foi")
        }
    })
    .catch(erro => console.log(erro))

    .then(this.buscaContatos)
    }
componentDidMount(){
    this.buscaContatos();
}
    render() {
        return (
            <main>
                <Side/>
                <Email/>
                <section className="content">
                    <div className="glass-home flex flex-collumn ai-flex-start jc-flex-start">
                        <h1>Digite um CNPJ</h1>
                        <form className="pesquisa flex">
                            <div className="inputs-home flex flex-collumn">
                                <label>CNPJ</label>
                                <input type="text"></input>
                            </div>
                            <div className="flex ai-center ai-flex-end">
                                <button className="btn-pesquisar flex ai-center jc-center"><i id="lupa" className="fas fa-search"></i>Buscar</button>
                            </div>
                        </form>
                        <div className="history flex flex-collumn ai-flex-start">
                            <h2>Nome da Empresa</h2>
                            <p>Ordenar por :</p>
                            <div className="ordenar flex ai-center jc-space-btw">
                                <div className="order flex ai-center">
                                    <button className="flex ai-center jc-center"><i id="star" className="fas fa-star"></i>Ver Favoritos</button>
                                </div>
                                <div className="order flex ai-center">
                                    <button className="flex ai-center jc-center"><i id="old" className="fas fa-arrow-left"></i>Mais Antigo</button>
                                </div>
                                <div className="order flex ai-center">
                                    <button className="flex ai-center jc-center"><i id="new" className="fas fa-arrow-right"></i>Mais Novo</button>
                                </div>
                            </div>
                            <div className="card-area flex ai-flex-start">
                                <div className="card-content flex flex-row flex-wrap jc-space-btw">
                                    <tbody>
                                    {this.state.listaContatos.map((contato) => {
                                        return (
                                            <tr key={contato.idContato} className="">
                                                 <div className="card flex flex-collumn ai-flex-start">
                                                 <div className="text flex ai-center jc-space-btw">
                                            <p>Data: {new Intl.DateTimeFormat('pt-BR').format(new Date(contato.dataCriacao))}</p>
                                            </div>
                                            <div className="assunto flex ai-center">
                                            <p>Titulo: {contato.titulo}</p>
                                            </div>
                                            <div className="assunto flex ai-center">
                                            <p>Descricao: {contato.descricao}</p>
                                            </div>
                                            <div className="assunto flex ai-center">
                                            <p>Empresa: {contato.idEmpresaNavigation.nomeEmpresa}</p>
                                            </div>
                                            <div className="btns flex ai-center jc-space-btw">
                                            <div className="action flex ai-center">
                                                <button className="btn-card flex ai-center jc-center" onClick={() => this.excluirContato(contato.idContato) }><i id="lixinho" class="fas fa-trash-alt"></i>Excluir do histórico</button>
                                            </div>
                                            <div className="action flex ai-center">
                                                <button  className="btn-card-star flex ai-center jc-center"><i id="star-card" className="fas fa-star"></i>Favoritar</button>
                                            </div>
                                        </div>
                                        </div>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                </section>
                <div className="bc1"></div>
                <div className="bc2"></div>
            </main>
        )
                                }

}