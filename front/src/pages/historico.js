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
            perfilContato: [],
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

    buscarContatosId = () => {
        axios(`https://localhost:5001/api/Contatos/${this.state.idContatoSelecionado}`)
        .then(resposta => {
            if (resposta.status === 200) {
                this.setState({ perfilContato: resposta.data })
            }
        })
    }

    excluirContato = async (contato) => {
        this.setState({
            idContatoSelecionado : contato.idContato
        })

        await axios.delete('http://localhost:5000/api/contatos/'+this.state.idContatoSelecionado)

        .then(resposta =>{
            if (resposta.status === 204) {
                console.log("foi")
            }
        })
        .catch(erro => console.log(erro))

        .then(this.buscaContatos)
    }
    
    abreModal = () => {
        const modal = document.getElementById('modal-card')
        modal.classList.add('mostrar')
        modal.addEventListener('click', (e) => {
            if (e.target.id === "modal-card" || e.target.id === "fechar") {
                modal.classList.remove('mostrar')
            }
        })
    }

    buscarId = async (event) => {
        this.setState({
            idContatoSelecionado : event.idContato
        })
        
        await axios("http://localhost:5000/api/Contatos/" + this.state.idContatoSelecionado)
        .then(resposta => {
            if (resposta.status === 200) {
                this.setState({ perfilContato: resposta.data})
                console.log("puxou o id")
            }
            console.log(this.state.perfilContato)
        })
        .catch(erro => console.log(erro))

        this.abreModal()
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
                        <h1>Histórico</h1>
                        <form className="pesquisa flex">
                            <div className="inputs-home flex flex-collumn">
                                <label>Selecione uma Empresa</label>
                                <form className='flex'>
                                    <select>
                                        <option disabled>Escolha uma Empresa</option>
                                        <option>Coca-Cola</option>
                                        <option>McDonalds</option>
                                    </select>
                                    <div className="flex ai-center ai-flex-end">
                                        <button type='submit' className="btn-pesquisar flex ai-center jc-center"><i id="lupa" className="fas fa-search"></i>Buscar</button>
                                    </div>
                                </form>
                            </div>
                        </form>
                        <div className="history flex flex-collumn ai-flex-start">
                            <h2>Todas as Chamadas</h2>
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
                                    <table className="tabela-leads">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Empresa</th>
                                                <th>Data</th>
                                                <th>Ações</th>
                                            </tr>
                                        </thead>
                                        {this.state.listaContatos.map((contato) => {
                                            return(
                                                <tbody className="tabela-body">
                                                    <tr onClick={()=> {this.buscarId(contato)}} key={contato.idContato}>
                                                        <td>{contato.titulo}</td>
                                                        <td>{contato.idEmpresaNavigation.nomeEmpresa}</td>
                                                        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(contato.dataCriacao))}</td>
                                                        <td>
                                                            <button className="btn-deletar-historico"><i id="lixinho-leads" class="fas fa-trash-alt"></i>Excluir</button>
                                                            <button className="btn-favoritar-historico"><i id="star" className="fas fa-star"></i>Favoritar</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="modal-card flex ai-center jc-center " id="modal-card">
                    <div className="modal-card-content">
                        <h1>Oieee</h1>
                        {this.state.perfilContato.map((dados) => {
                            return (
                                <div className="">
                                    <div className="">
                                        <p>{dados.titulo}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <div className="bc1"></div>
                <div className="bc2"></div>
            </main>
        )
    }
}