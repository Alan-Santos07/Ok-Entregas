import React, { Component } from 'react';
 import axios from 'axios';

import '../css/base-style.css'
import '../css/leads.css'
import Side from '../components/side-bar'
import Email from '../components/email'

export default class Leads extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listaLeads: [],
            statusLead: "",
            nome: "",
            email: "",
            cargo: "",
            score: "",
            telefone: "",
            necessidades: "",
            idEmpresa: 0
        }
    }
    cadastrarLeads = (event) => {
        event.preventDefault();

        let lead = {
            statusLead : this.state.statusLead,
            nome : this.state.nome,
            email : this.state.email,
            cargo : this.state.cargo,
            score : this.state.score,
            telefone : this.state.telefone,
            necessidades : this.state.necessidades,
            idEmpresa : this.state.idEmpresa
            
        };
        axios.post("http://localhost:5000/api/leads", lead)
        .then(resposta => {
            if(resposta.status === 201){
                console.log('VAMOOOOMM')
                const modal = document.getElementById('modal')
                 modal.classList.remove('mostrar')          
            }
        })

        .catch(erro => {
            console.log(erro);
        })
    }
    buscaLeads = () => {
        axios("http://localhost:5000/api/Leads")
        .then(resposta => {
            if (resposta.status === 200) {
                this.setState({ listaLeads: resposta.data})

            }
            console.log(this.state.listaLeads)
        })
        .catch(erro => console.log(erro));
    }
    atualizaStateCampo = (campo) => {
        this.setState({[campo.target.name]: campo.target.value})
      }
    excluirLead = async (id) => {
     

        await axios.delete('http://localhost:5000/api/leads/'+id)
        .then(resposta =>{
            if (resposta.status === 204) {
                console.log(id)
                console.log("foi")
            }
        })
        .catch(erro => console.log(erro))
    
        .then(this.buscaLeads)
        }
        abreModalLd = () => {
            const modal = document.getElementById('modal-card-lead')
            modal.classList.add('mostrar')
            modal.addEventListener('click', (e) => {
                if (e.target.id === "modal-card-lead" || e.target.id === "fechar") {
                    modal.classList.remove('mostrar')
                }
            })
        }
    componentDidMount(){
        this.buscaLeads();
    }

    render() {
        return(
            <main>
                <Side/>
                <Email/>
                <section className="content">
                    <div className="glass-home flex flex-collumn ai-flex-start jc-flex-start">
                        <h1>LEADS</h1>
                        <div className="card-area flex ai-flex-start">
                        <button onClick={this.abreModalLd} type='button' className="btn-pesquisar flex ai-center jc-center">Novo Historico</button>

                        <section className="modal-card flex ai-center jc-center " id="modal-card-lead">
                    <div className="modal-card-content">
                    <div className='inputs-empresa-content'>
                            <form className='form-empresa flex flex-wrap jc-space-btw' onSubmit={this.cadastrarLeads}>
                                <div className="inputs-empresa flex flex-collumn"> 
                                <label>Status do Lead</label>
                                    <input type="text" name='statusLead' value={this.state.statusLead} onChange={this.atualizaStateCampo}/>
                                </div>
                                <div className="inputs-empresa flex flex-collumn">
                                    <label>Nome</label>
                                    <input type="text" name='nome' value={this.state.nome} onChange={this.atualizaStateCampo}/>
                                </div>
                                <div className="inputs-empresa flex flex-collumn">
                                    <label>Email</label>
                                    <input type="text" name='email' value={this.state.email} onChange={this.atualizaStateCampo}/>
                                </div>
                                <div className="inputs-empresa flex flex-collumn">
                                    <label>Cargo do Lead</label>
                                    <input type="text" name='cargo' value={this.state.cargo} onChange={this.atualizaStateCampo}/>
                                </div>
                                <div className="inputs-empresa flex flex-collumn">
                                    <label>Score</label>
                                    <input type="text" name='score' value={this.state.score} onChange={this.atualizaStateCampo}/>
                                </div>
                                <div className="inputs-empresa flex flex-collumn">
                                    <label>Telefone</label>
                                    <input type="text" name='telefone' value={this.state.telefone} onChange={this.atualizaStateCampo}/>
                                </div>
                                <div className="inputs-empresa flex flex-collumn">
                                    <label>Necessidades</label>
                                    <input type="text" name='necessidades' value={this.state.necessidades} onChange={this.atualizaStateCampo}/>
                                </div>
                                
                                <select 
                                className="select-Lead"
                                name="idEmpresa" 
                                value={this.state.idEmpresa} 
                                onChange={this.atualizaStateCampo}>
                                    <option value="0"> Selecione uma Empresa </option>
                                    {
                                        this.state.listaLeads.map(tipo => {
                                            return(
                                                <option key={tipo.idEmpresa} value={tipo.idEmpresa}>
                                                    {tipo.idEmpresaNavigation.nomeEmpresa}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                                <div className="empresa-btn flex ai-center">
                                    <button type="submit" className="btn-cadastro-empresa flex ai-center jc-center"><i id="icon-empresa-cadastro" class="fas fa-store"></i>Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                            <div className="card-content-leads flex flex-row flex-wrap jc-space-btw">
                                <table className="tabela-leads">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Empresa</th>
                                            <th>Status Lead</th>
                                            <th>Score</th>
                                            <th>Cargo</th>
                                            <th>Telefone</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    {this.state.listaLeads.map((lead) => {
                                        return(
                                            <tbody className="tabela-body">
                                                <tr>
                                                    <td>{lead.nome}</td>
                                                    <td>{lead.idEmpresaNavigation.nomeEmpresa}</td>
                                                    <td>{lead.statusLead}</td>
                                                    <td>{lead.score}</td>
                                                    <td>{lead.cargo}</td>
                                                    <td>{lead.telefone}</td>
                                                    <td><button className="btn-leads"><i id="lixinho-leads" class="fas fa-trash-alt"></i>Excluir</button></td>
                                                </tr>
                                            </tbody>
                                        )
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
