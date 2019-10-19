import React from 'react'
import axios from 'axios'

import CursoForm from '../form'
import CursoList from '../lista'

const URL = "http://localhost:3200/api/curso"

export default class Cadastro extends React.Component {

    state = {
        data: [],
        codigo: 0,
        descricao: 'salve',
        cargaHoraria:'0',
        preco: 0.0,
        categoria: 'REDES' 
    }
    alteraCodigo = function(codigo){
        this.setState({codigo})
    }
    alteraDescricao = function(descricao){
        this.setState({descricao})
    }
    alteraCargaHoraria = function(cargaHoraria){
        this.setState({cargaHoraria})
    }
    alteraPreco = function(preco){
        this.setState({preco})
    }
    alteraCategoria = function(categoria){
        this.setState({categoria})
    }

    componentWillMount(){
        this.listar()
    }

    listar() {
        axios.get(URL).then(response => this.setState({...this.state, data: response.data}) )
    }

    listarCallback(data){
        
    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm  alteraCampo={this.state.alteraCampo.bind()} 
                    codigo={this.state.codigo}
                    descricao={this.state.descricao}
                    cargaHoraria={this.state.cargaHoraria}/>
                    preco={this.state.preco}/>
                    categoria={this.state.categoria}/>
                </div>
                <div className="col-md-6">
                    <CursoList batatas={this.state.data} />
                </div>
            </div>
        )
    }
}