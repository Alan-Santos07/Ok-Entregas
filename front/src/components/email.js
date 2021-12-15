import React, { useState  } from 'react';
import axios from 'axios';

import '../css/base-style.css'
import '../css/email.css'

function Email() {
    const [NomeSeu, setNomeSeu] = useState('')
    const [Endereco, setEndereçoSeu] = useState('')

    const [NomePara, setEndereçoPara] = useState('')
    const [EnderecoPara, setEnderecoPara] = useState('')

    const [Assunto, setAssunto] = useState('')
    const [Mensagem, setMensagem] = useState('')

        function  EnviarEmail(event){
            event.preventDefault();

            let EmailBody = {
                from: {name: 'STILL SOLUTIONS', address: 'joaovdlf@gmail.com'},
                to: {name: 'JOAO VITOR', address: EnderecoPara},
                subject: Assunto,
                message: Mensagem
            };

            axios.post("https://easymail.p.rapidapi.com/send", EmailBody, {
            headers:{
                'X-RapidAPI-Host': 'easymail.p.rapidapi.com',
                'X-RapidAPI-Key': '56519e1a91msh35cec7200c6bc6ep1928fbjsnd6c4051505c8'
            }
           })
           .then(Response =>{
                console.log(Response.data)
                setAssunto("")
                setMensagem("")
                setEnderecoPara("")

           })
           .catch(error => console.log(error))
           }

        return (
            <section className="email-bar flex flex-collumn">
                <div className="email-content flex flex-collumn ai-center">
                    <h1>Enviar E-mail</h1>
                    <form className="email-form flex flex-collumn jc-space-btw" onSubmit={EnviarEmail}>
                        <div className="inputs-email flex flex-collumn">
                            <label>Destinatário</label>
                            <input type="text" value={EnderecoPara} onChange={(event) => setEnderecoPara(event.target.value)}></input>
                        </div>
                        <div className="inputs-email flex flex-collumn">
                            <label>Assunto</label>
                            <input type="text" value={Assunto} onChange={(event) => setAssunto(event.target.value)}></input>
                        </div>
                        <div className="inputs-email flex flex-collumn">
                            <label>Conteúdo</label>
                            <textarea id="input-email" type="text" value={Mensagem} onChange={(event) => setMensagem(event.target.value)}></textarea>
                        </div>
                        <div className="flex ai-center ai-flex-end">
                            <button className="btn-email flex ai-center jc-center" type='submit'><i id="email" className="fas fa-envelope"></i>Enviar E-mail</button>
                        </div>
                    </form>
                </div>
            </section>
        )
}

export default Email;