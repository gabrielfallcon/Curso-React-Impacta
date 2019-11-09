import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { alteraCodigo, alteraDescricao, alteraCarga, alteraPreco, alteraCategoria, adicionarCurso } from '../../../actions/curso-action'

const mapStateToProps = state => ({

    codigo       : state.curso.codigo,
    descricao    : state.curso.descricao,
    cargaHoraria : state.curso.cargaHoraria,
    preco        : state.curso.preco,
    categoria    : state.curso.categoria,
    textoBotao   : state.curso.textoBotao

})

const mapDispatchToProps = dispatch => bindActionCreators({

    alteraCodigo,
    alteraDescricao,
    alteraCarga,
    alteraPreco,
    alteraCategoria,
    adicionarCurso

}, dispatch)

 class Formulario extends React.Component {

    render() {

        const { 
            codigo,
            descricao,
            cargaHoraria,
            preco,
            categoria,
            textoBotao,

            alteraCodigo,
            alteraDescricao,
            alteraCarga,
            alteraPreco,
            alteraCategoria,
            adicionarCurso

        } = this.props

        return (

            <div className="border-right pl-3 pr-3">
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="codigo"
                            className="col-sm-3 col-form-label">
                            Código:
                        </label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="codigo" value={this.props.codigo} 
                                onChange={alteraCodigo}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="descrição"
                            className="col-sm-3 col-form-label">
                            Descrição:
                        </label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="descricao" value={this.props.descricao} 
                                onChange={alteraDescricao}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="cargaHoraria"
                            className="col-sm-3 col-form-label">
                            Carga Horária:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="cargaHoraria" value={this.props.cargaHoraria} 
                                onChange={alteraCarga}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="preco"
                            className="col-sm-3 col-form-label">
                            Preço:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="preco"  value={this.props.preco}
                                onChange={alteraPreco}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="categoria"
                            className="col-sm-3 col-form-label">Categoria:</label>
                        <div className="col-sm-9">
                            <select className="form-control" id="categoria" value={this.props.categoria}
                                onChange={alteraCategoria}>
                                <option>INFORMATICA</option>
                                <option>ENGENHARIA</option>
                                <option>ADMINISTRACAO</option>
                                <option>REDES</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button onClick={adicionarCurso}
                            className="btn btn-primary ml-3 mb-3 mr-2">
                            {this.props.textoBotao}
                        </button>

                        <button onClick={this.props.limpar}
                            className="btn btn-primary ml-3 mb-3">
                            Limpar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Formulario)