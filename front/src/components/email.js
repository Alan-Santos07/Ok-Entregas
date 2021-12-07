import React, { useState  } from 'react';

import '../css/base-style.css'
import '../css/email.css'

function Email() {

        return (
            <section className="email-bar flex flex-collumn">
                <div className="email-content flex flex-collumn ai-center">
                    <h1>Enviar E-mail</h1>
                    <form className="email-form flex flex-collumn jc-space-btw">
                        <div className="inputs-email flex flex-collumn">
                            <label>Destinatário</label>
                            <input type="text"></input>
                        </div>
                        <div className="inputs-email flex flex-collumn">
                            <label>Assunto</label>
                            <input type="text"></input>
                        </div>
                        <div className="inputs-email flex flex-collumn">
                            <label>Conteúdo</label>
                            <textarea id="input-email" type="text"></textarea>
                        </div>
                        <div className="flex ai-center ai-flex-end">
                            <button className="btn-email flex ai-center jc-center"><i id="email" className="fas fa-envelope"></i>Enviar E-mail</button>
                        </div>
                    </form>
                </div>
            </section>
        )
}

export default Email;