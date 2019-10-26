import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import Cabecalho from '../../components/menu/cabecalho'
import ContatoForm from '../../pages/contato/form'


class Contato extends Component {
    render() {
        return (
            <div className="container">
                 <Cabecalho 
                titulo="Contato" 
                subtitulo="Fale conosco"
                data={this.props.data}
                />
                <ContatoForm></ContatoForm>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data :    state.contato.data
})

export default connect(mapStateToProps)(Contato)