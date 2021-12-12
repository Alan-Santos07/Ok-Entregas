import React, { useState,  } from 'react';
import '../css/base-style.css'
import '../css/home.css'
import Side from '../components/side-bar'
import Email from '../components/email'
import axios from 'axios';

function Login () {
    const [cpnj, setCNPJ] = useState("");
    const [cpnjRazao, setCNPJRazao] = useState("");
    const [cpnjTelefone, setCNPJTelefone] = useState("");
    const [cpnjNome, setCNPJNome] = useState("");
    const [params, setParams] = useState("")




    async function BuscarCnpj(event){
        console.log("entrou")
        event.preventDefault();

        await axios.get(`https://www.receitaws.com.br/v1/cnpj/${params}`)
        .then(rps => {
            console.log(rps.data)
            setCNPJ(
                rps.data.email
            )
            setCNPJRazao(
                rps.data.fantasia
            )
            setCNPJNome(
                rps.data.nome
            )
            setCNPJTelefone(
                rps.data.telefone
            )
        })
        .catch(error => console.log(error))
   }

   return(
    <main>
        
            <Side/>
            <Email/>
            
                <section className="content">
                    <div className="glass-home flex flex-collumn ai-flex-start jc-flex-start">
                        <h1>Digite um CNPJ</h1>
                        <form className="pesquisa flex" onSubmit={BuscarCnpj}>
                            <div className="inputs-home flex flex-collumn">
                                <label>CNPJ</label>
                                <input type="text" value={params} onChange={(event) => setParams(event.target.value)}></input>
                            </div>
                            <div className="flex ai-center ai-flex-end">
                                <button className="btn-pesquisar flex ai-center jc-center"><i id="lupa" className="fas fa-search" type='submit'></i>Buscar</button>
                            </div>
                        </form>
                        <div className="resultado">
                            <div className="resultado-content flex flex-collumn ai-flex-start jc-space-eve">
                                <div className="inputs-resultado flex ai-center">
                                    <label>E-mail :</label>
                                    <input type="text" value={cpnj} onChange={(event) => setCNPJ(event.target.value)} name={cpnj} disabled></input>
                                    <div className="copy">
                                        <button>Copiar E-mail<i id="copy" className="fas fa-copy"></i></button>
                                    </div>
                                </div>
                                <div className="inputs-resultado flex ai-center">
                                    <label>Telefone :</label>
                                    <input type="text" value={cpnjTelefone} onChange={(event) => setCNPJTelefone(event.target.value)} name={cpnjTelefone} disabled></input>
                                </div>
                                <div className="inputs-resultado flex ai-center">
                                    <label>Razão Social :</label>
                                    <input type="text"  value={cpnjNome} onChange={(event) => setCNPJNome(event.target.value)} name={cpnjNome} disabled></input>
                                </div>
                                <div className="inputs-resultado flex ai-center">
                                    <label>Nome Fantasia :</label>
                                    <input type="text" value={cpnjRazao} onChange={(event) => setCNPJRazao(event.target.value)} name={cpnjRazao} disabled></input>
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
   );

}

export default Login;



    


    

