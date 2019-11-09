import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { listarCurso } from '../../../actions/curso-action'

const mapStateToProps = state => ({
   lista : state.curso.lista

})

const mapDispatchToProps = dispatch => bindActionCreators({
    listarCurso
}, dispatch)


 class Lista extends React.Component {

    componentWillMount() {
        this.props.listarCurso()
    }

    exibirLinhas = () => {
        const cursos = this.props.lista || [];
        return cursos.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>
                <td>
                <button className="btn btn-success mr-3"
                    onClick={() => this.props.consultarCurso(curso)}>
                    <i className="fa fa-check"></i>
                </button>
                
                <button className="btn btn-danger"
                    onClick={() => this.props.removerCurso(curso)}>
                    <i className="fa fa-trash-o"></i>
                </button>
                </td>
            </tr>
        ));
    }

    render() {

        return (
            <div>
                <h3>Lista de Cursos</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exibirLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lista)