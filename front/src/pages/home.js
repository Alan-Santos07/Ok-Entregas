import React, { Component } from 'react';
// import axios from 'axios';

import '../css/base-style.css'
import '../css/home.css'
import Side from '../components/side-bar'
import Email from '../components/email'

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
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
                        <div className="resultado">
                            <div className="resultado-content flex flex-collumn ai-flex-start jc-space-eve">
                                <div className="inputs-resultado flex ai-center">
                                    <label>E-mail :</label>
                                    <input type="text"></input>
                                    <div className="copy">
                                        <button>Copiar E-mail<i id="copy" className="fas fa-copy"></i></button>
                                    </div>
                                </div>
                                <div className="inputs-resultado flex ai-center">
                                    <label>Telefone :</label>
                                    <input type="text"></input>
                                    <div className="call">
                                        <button>Ligar<i id="ligar" className="fas fa-phone"></i></button>
                                    </div>
                                </div>
                                <div className="inputs-resultado flex ai-center">
                                    <label>Razão Social :</label>
                                    <input type="text"></input>
                                </div>
                                <div className="inputs-resultado flex ai-center">
                                    <label>Nome Fantasia :</label>
                                    <input type="text"></input>
                                </div>
                                <div className="historico flex ai-center">
                                    <button className="flex ai-center jc-center"><i id="hist" className="fas fa-history"></i>Procurar no Histórico</button>
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