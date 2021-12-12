import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { parseJwt, usuarioAutenticado } from '../services/auth';

import logo from '../img/logo.png'
import welcome from '../img/welcome.png'
import Loading from '../components/Loading';

import '../css/base-style.css'
import '../css/login.css'

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            erroMensagem: "",
            isLoading: false,

        }
    };

efetuaLogin =(event) =>{
    event.preventDefault();

    this.setState({ erroMensagem:'', isLoading: true})


    setTimeout(() => {
        axios.post('http://localhost:5000/api/login', {
        email: this.state.email,
        senha: this.state.senha
    })

    .then(resposta => {
        if(resposta.status ===200){
            localStorage.setItem('usuario-login', resposta.data.token)

            console.log('Meu token: ' + resposta.data.token)
            this.setState({isLoading: false})
         

            console.log(parseJwt());
            console.log(parseJwt().role);

            if (parseJwt().role === "1") {
                console.log(usuarioAutenticado());
                this.props.history.push('/home')
            }
            else{
                this.props.history.push('/')
            }
        }
    })

    .catch(() => {
        this.setState({ erroMensagem : "E-mail ou senha inválidos! Tente novamente.", isLoading: false})
        
    })
    }, 3000);

    

                


}

atualizaStateCampo =  async (campo) => {
    this.setState({ [campo.target.name] : campo.target.value})
}

    render() {
        return (
            <main>
                <section className="glass">
                    <div className="user-info">

                        <h1>Login</h1>
                        <form onSubmit={this.efetuaLogin} className="forms">
                            <div className="inputs">
                                <label>E-mail</label>
                                <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.atualizaStateCampo}
                                
                                ></input>
                            </div>
                            <div className="inputs">
                                <label>Senha</label>
                                <input 
                                type="password"
                                name="senha"
                                value={this.state.senha}
                                onChange={this.atualizaStateCampo}
                                ></input>
                            </div>
                            <Link to ="/" className="forgot"><p>Esqueceu a sua senha ?</p></Link>
                            <p>{this.state.erroMensagem}</p>

                            
                            {
                                this.state.isLoading === true && 
                                //<button type="submit" disabled>Loading...</button>
                                <Loading />


                            }

                            {
                                this.state.isLoading === false && 
                                <button
                                
                                    type="submit"
                                    disabled={this.state.email ==='' || this.state.senha ==='' ? 'none' : ''}
                                    className="btn"
                                >
                                    Login
                                </button>
                            }

                            
                            {/* <button type="submit" className="btn">Logar</button>  */}
                        </form>
                    </div>
                    <div className="images">
                        <div className="ilustration">
                            <img src={logo} className="logo" alt="Logo OK Entregas"/>
                            <img src={welcome} className="welcome" alt="Ilustração com mensagem de bem-vindo"/>
                        </div>
                    </div>
                </section>
                <div className="bc1"></div>
                <div className="bc2"></div>
                <div className="circle"></div>
                <div className="square"></div>
            </main>
        )
    }
}