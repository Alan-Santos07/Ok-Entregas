import React, { Component } from 'react';
 import axios from 'axios';

import '../css/base-style.css'
import '../css/home.css'
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
                <div className="card-content flex flex-row flex-wrap jc-space-btw">
                    <tbody>
                    {this.state.listaLeads.map((lead) => {
                        return(
                            <tr key={lead.idLead}>
                            <div>
                                <div className="card flex flex-collumn ai-flex-start">
                                <p>Nome: {lead.nome}</p>
                                <p>Empresa: {lead.idEmpresaNavigation.nomeEmpresa}</p>
                                <p>Status Lead: {lead.statusLead}</p>
                                <p>Score: {lead.score}</p>
                                <p>Email: {lead.email}</p>
                                <p>Cargo: {lead.cargo}</p>
                                <p>Telefone: {lead.telefone}</p>
                                <p>Necessidades: {lead.necessidades}</p>
                                <div className="btns flex ai-center jc-space-btw">
                                            <div className="action flex ai-center">
                                                <button className="btn-card flex ai-center jc-center" onClick={() => this.excluirLead(lead.idLeads)}><i id="lixinho" class="fas fa-trash-alt"></i>Excluir do histórico</button>
                                            </div>
                                            <div className="action flex ai-center">
                                                <button  className="btn-card-star flex ai-center jc-center"><i id="star-card" className="fas fa-star"></i>Favoritar</button>
                                            </div>
                                        </div>
                                </div>
                                
                            </div>
                            </tr>)
                        
                    })}
                   
                    </tbody>
                    </div>
                    
                </div>
                
                </div>
                
            </section>
            </main>
        
        )
    }
}
