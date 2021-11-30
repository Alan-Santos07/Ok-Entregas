import React, { Component } from 'react';
// import axios from 'axios';

import '../css/base-style.css'
import '../css/historico.css'
import Side from '../components/side-bar'
import Email from '../components/email'

export default class Historico extends Component{
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
                                    <div className="card flex flex-collumn ai-flex-start">
                                        <div className="text flex ai-center jc-space-btw">
                                            <p>21 / 10 / 2021</p>
                                            <p> - </p>
                                            <p>14 : 45</p>
                                        </div>
                                        <div className="assunto flex ai-center">
                                            <p id="padrao">Enviou um email com o assunto :</p>
                                            <p>Proposta Comercial</p>
                                        </div>
                                        <div className="btns flex ai-center jc-space-btw">
                                            <div className="action flex ai-center">
                                                <button className="btn-card flex ai-center jc-center"><i id="lixinho" class="fas fa-trash-alt"></i>Excluir do histórico</button>
                                            </div>
                                            <div className="action flex ai-center">
                                                <button className="btn-card-star flex ai-center jc-center"><i id="star-card" className="fas fa-star"></i>Favoritar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card flex flex-collumn ai-flex-start">
                                        <div className="text flex ai-center jc-space-btw">
                                            <p>21 / 10 / 2021</p>
                                            <p> - </p>
                                            <p>14 : 45</p>
                                        </div>
                                        <div className="assunto flex ai-center">
                                            <p id="padrao">Enviou um email com o assunto :</p>
                                            <p>Proposta Comercial</p>
                                        </div>
                                        <div className="btns flex ai-center jc-space-btw">
                                            <div className="action flex ai-center">
                                                <button className="btn-card flex ai-center jc-center"><i id="lixinho" class="fas fa-trash-alt"></i>Excluir do histórico</button>
                                            </div>
                                            <div className="action flex ai-center">
                                                <button className="btn-card-star flex ai-center jc-center"><i id="star-card" className="fas fa-star"></i>Favoritar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card flex flex-collumn ai-flex-start">
                                        <div className="text flex ai-center jc-space-btw">
                                            <p>21 / 10 / 2021</p>
                                            <p> - </p>
                                            <p>14 : 45</p>
                                        </div>
                                        <div className="assunto flex ai-center">
                                            <p id="padrao">Enviou um email com o assunto :</p>
                                            <p>Proposta Comercial</p>
                                        </div>
                                        <div className="btns flex ai-center jc-space-btw">
                                            <div className="action flex ai-center">
                                                <button className="btn-card flex ai-center jc-center"><i id="lixinho" class="fas fa-trash-alt"></i>Excluir do histórico</button>
                                            </div>
                                            <div className="action flex ai-center">
                                                <button className="btn-card-star flex ai-center jc-center"><i id="star-card" className="fas fa-star"></i>Favoritar</button>
                                            </div>
                                        </div>
                                    </div>
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