import loading from '../img/Spinner-1s-200px.svg'
import  '../css/Loading.css'

import React, { Component } from 'react';




export default class Loading extends Component{
    constructor(props) {
        super(props);
        this.state = {
    
        }
    };


    render() {
        return (
            <>
                <img src={loading} className='loader'/>
            </>
        )
    }
}