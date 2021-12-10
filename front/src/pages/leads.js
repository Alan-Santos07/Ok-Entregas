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
            listaLeads: []
        }
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
