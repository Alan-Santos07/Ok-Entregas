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
            listaEmpresa: [],
            listaLead: [],
            perfilContato: "",
            nomeEmpresa: '',
            descricao: '',
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

    excluirContato = async (contato) => {
        this.setState({
            idContatoSelecionado : contato.idContato
        })

        await axios.delete('http://localhost:5000/api/Contatos/'+this.state.idContatoSelecionado)

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

    abreModalHs = () => {
        const modal = document.getElementById('modal-card-historico')
        modal.classList.add('mostrar')
        modal.addEventListener('click', (e) => {
            if (e.target.id === "modal-card-historico" || e.target.id === "fechar") {
                modal.classList.remove('mostrar')
            }
        })
    }

    buscarId = async (id) => {

        await axios("http://localhost:5000/api/Contatos/" + id)
        .then(resposta => {
            if (resposta.status === 200) {
                this.setState({ perfilContato: resposta.data.titulo, descricao: resposta.data.descricao})
                console.log("puxou o id")
            }
            console.log(this.state.perfilContato)
            console.log(this.state.perfilContato1)

        })
        .catch(erro => console.log(erro))

        this.abreModal()
    }

    atualizaStateCampo = (campo) => {
        this.setState({[campo.target.name]: campo.target.value})
      }

    cadastrarHistorico = (event) => {
                event.preventDefault();
        
                let contato = {
                    titulo : this.state.titulo,
                    descricao : this.state.descricao,
                    dataCriacao : this.state.dataCriacao,
                    favoritar : 0,
                    idEmpresa : this.state.IdEmpresa,
                    idLeads : this.state.IdLead
                };
                setTimeout(() => {
                    axios.post("http://localhost:5000/api/Contatos", contato)
                    
                    .then (resposta => {
                        if(resposta.status === 201){
                            console.log('foi')
                            const modal = document.getElementById('modal')
                            modal.classList.remove('mostrar')          
                            this.setState({ erroMensagem:'', isLoading: false})
                        }
                    })
                    .catch(erro => {
                        console.log(erro);
                    })        
                }, 3000);
            
            }

            buscaEmpresa = () => {
                axios("http://localhost:5000/api/Empresas")
                          
                .then(resposta => {
                    if(resposta.status === 200){
                        this.setState({listaEmpresa: resposta.data})
                        console.log(this.state.listaEmpresa)
                    }
                })
            }

            buscaLead = () => {
                axios("http://localhost:5000/api/Leads")
                          
                .then(respost => {
                    if(respost.status === 200){
                        this.setState({listaLead: respost.data})
                        console.log(this.state.listaLead)
                    }
                })
            }

            componentDidMount(){
                this.buscaContatos();
                this.buscaEmpresa();
                this.buscaLead();
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
                                    <div className="flex ai-center ai-flex-end">
                                    <button onClick={this.abreModalHs} type='button' className="btn-pesquisar flex ai-center jc-center">Novo Historico</button>
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
                                                    <tr onClick={()=> {this.buscarId(contato.idContato)}} key={contato.idContato}>
                                                        <td>{contato.titulo}</td>
                                                        <td>{contato.idEmpresaNavigation.nomeEmpresa}</td>
                                                        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(contato.dataCriacao))}</td>
                                                        <td>
                                                            <button type="submit" onClick={() => this.excluirContato(contato)}className="btn-deletar-historico"><i id="lixinho-leads" class="fas fa-trash-alt"></i>Excluir</button>
                                                            {/* <button className="btn-deletar-historico"><i id="lixinho-leads" class="fas fa-trash-alt"></i>Excluir</button> */}
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
                    <section className="modal-card-historico flex ai-center jc-center" id="modal-card-historico">
                    <div className="modal-card-content">
                    <form onSubmit={this.cadastrarHistorico} className="modal-content flex flex-collumn ai-center jc-space-eve">
                        <h1 className="titulinho">Cadastre Um Novo Historico</h1>
                        <div className="inputs-cadastro flex flex-collumn ai-center">
                            <label>Nome</label>
                            <input type="text" name='titulo' value={this.state.titulo} onChange={this.atualizaStateCampo}></input>
                        </div>
                        <div className="inputs-cadastro flex flex-collumn ai-center">
                            <label>Descrição</label>
                            <input type="text" name='descricao' value={this.state.descricao} onChange={this.atualizaStateCampo}></input>
                        </div>
                        <div className="inputs-cadastro flex flex-collumn ai-center">
                            <label>Data de Criação</label>
                            <input type="text" name='dataCriacao' value={this.state.dataCriacao} onChange={this.atualizaStateCampo}></input>
                            
                        </div>
                        
                            <div className="IdEmpresa flex flex-collumn ai-center">
                                <label>Escolha uma Empresa</label>
                                <select 
                                className="select-lead"
                                name="IdEmpresa" 
                                value={this.state.IdEmpresa} 
                                onChange={this.atualizaStateCampo}>
                                    <option value="0">Selecione Sua Empresa</option>
                                    {
                                        this.state.listaEmpresa.map(tipo => {
                                            return(
                                                <option key={tipo.IdEmpresa} value={tipo.idEmpresa}>
                                                    {tipo.nomeEmpresa}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                            
                            <div className="input-select flex flex-collumn ai-center">
                                <label>Escolha um Lead</label>
                                <select 
                                className="select-lead"
                                name="IdLead" 
                                value={this.state.IdLead} 
                                onChange={this.atualizaStateCampo}>
                                    <option value="0"> Selecione um Lead </option>
                                    {
                                        this.state.listaLead.map(tipo => {
                                            return(
                                                <option key={tipo.IdLead} value={tipo.idLeads}>
                                                    {tipo.nome}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                            </div>           
                            <div className="flex ai-center ai-flex-end">
                                <button type="submit" className="btn-cadastro flex ai-center jc-center"><i id="icon-history-cadastrar" className="fas fa-history"></i>Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </section>
                               
                <section className="modal-card flex ai-center jc-center " id="modal-card">
                    <div className="modal-card-content flex flex-collumn ai-center">
                        <h1>{this.state.perfilContato}</h1>
                        <div className="info-modal-historico">
                            <div className="historico-descricao-modal flex flex-collumn ai-center">
                                {/* <p>{this.state.nomeEmpresa}</p> */}
                                <p>{this.state.descricao}</p>
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