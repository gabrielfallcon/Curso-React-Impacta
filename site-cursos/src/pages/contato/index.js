import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Cabecalho from '../../components/menu/cabecalho'

export default class Contato extends Component {
    render() {
        return (
            <div className="container">
                 <Cabecalho 
                titulo="Contato" 
                subtitulo="Fale conosco"
                />
            </div>
        )
    }
}