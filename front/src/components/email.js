import React, { useState, useRef  } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';


import '../css/base-style.css'
import '../css/email.css'

function Email() {
    const [Replay, setReplay] = useState('')
        const form = useRef();

        function  EnviarEmail(e){
            e.preventDefault();

            emailjs.sendForm('gmailMessage', 'template_8u60xt9', form.current, 'user_u8LH9KP4dVVTzPWvSWtYb', {}, {
                Headers :{
                    "reply-to":"okentregas10@gmail.com"
                }
            } )
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
           }

        return (
            <section className="email-bar flex flex-collumn">
                <div className="email-content flex flex-collumn ai-center">
                    <h1>Enviar E-mail</h1>
                    <form className="email-form flex flex-collumn jc-space-btw" ref={form} onSubmit={EnviarEmail}>
                        <div className="inputs-email flex flex-collumn">
                            <label>Destinatário</label>
                            <input type="text"name="email"></input>
                        </div>
                        <div className="inputs-email flex flex-collumn">
                            <label>Assunto</label>
                            <input type="text" name="subject"></input>
                        </div>
                        <div className="inputs-email flex flex-collumn">
                            <label>Conteúdo</label>
                            <textarea id="input-email" type="text" name="message"></textarea>
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