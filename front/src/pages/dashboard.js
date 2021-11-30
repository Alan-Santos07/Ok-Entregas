import React, { Component } from 'react';
// import axios from 'axios';

import '../css/base-style.css'
import Side from '../components/side-bar'
import Email from '../components/email'

export default class Dashboard extends Component{
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
                    <div className="glass-home">
                    <h1>Dashboard</h1>
                    </div>
                </section>
                <div className="bc1"></div>
                <div className="bc2"></div>
            </main>
        )
    }

}