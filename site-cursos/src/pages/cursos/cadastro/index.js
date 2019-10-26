import React from 'react'
import axios from 'axios'

import CursoForm from '../form'
import CursoList from '../lista'

const URL = "http://localhost:3200/api/curso"

export default class Cadastro extends React.Component {

    initialState = {
        data: [],
        _id: '',
        codigo: 0,
        descricao: '',
        cargaHoraria: 0,
        preco: 0.0,
        categoria: 'REDES',
        textoBotao: 'Adicionar'
    }

    constructor(props) {
        super(props)
        this.state = this.initialState

    }

    componentWillMount() {
        this.listar()
    }

    listar() {
        axios.get(URL).then(response => this.setState({ ...this.state, data: response.data }))
    }

    adicionarCurso(e) {

        console.log('inicio adicionarCurso')
        e.preventDefault();

        const {_id, codigo, descricao, cargaHoraria, preco, categoria } = this.state;
        const body = { codigo, descricao, cargaHoraria, preco, categoria }

        if (_id && _id.trim() !== '') {

            axios.put(`${URL}/${_id}`, body)
                .then(_ => {
                    this.callbackSuccess('Curso Atualizado')
                })
                .catch(error => this.callbackError() );

        } else {

            axios.post(URL, body)
                .then(_ => {
                    this.callbackSuccess('Curso adicionado')
                })
                .catch(error => this.callbackError());
        }
    }

    callbackSuccess = function (msg) {
        alert(msg);
        this.setState(this.initialState)
        this.listar();
    }

    callbackError = function (error) {
        console.log(error)

        const cargaHoraria = error.response.data.errors.cargaHoraria
        const codigo = error.response.data.errors.codigo
        const preco = error.response.data.errors.preco
        const descricao = error.response.data.errors.descricao
        const categoria = error.response.data.errors.categoria

        var texto = ''

        if (cargaHoraria) {
            texto += 'Carga horária Inválida\n'
        }

        if (codigo) {
            texto += 'Código Inválido\n'
        }

        if (preco) {
            texto += 'Preço Inválido\n'
        }
        if (descricao) {
            texto += 'Descrição Inválida\n'
        }
        if (categoria) {
            texto += 'Categoria Inválida\n'
        }
        alert(texto)

    }

    alteraCampos = function (target) {
        switch (target.id) {
            case 'codigo':
                this.setState({ codigo: target.value })
                break
            case 'descricao':
                this.setState({ descricao: target.value })
                break
            case 'cargaHoraria':
                this.setState({ cargaHoraria: target.value })
                break
            case 'preco':
                this.setState({ preco: target.value })
                break
            case 'categoria':
                this.setState({ categoria: target.value })
                break
            default:
                break
        }
    }

    removerCurso = function (curso) {

        if (window.confirm('Voce deseja remover o cursi selecionado?')) {

            axios.delete(`${URL}/${curso._id}`).then(response => {
                alert(`Curso ${curso.descricao} foi removido com sucesso!`)
                this.listar()
            }).catch(error => {
                console.log(error)
            })

        }
        console.log(curso)
    }

    consultarCurso = function (curso) {

        this.setState({
            ...this.state,
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            preco: curso.preco,
            categoria: curso.categoria
        })

    }
    limpar = function(e){
        e.preventDefault();
        this.setState({...this.initialState, data : this.state.data})
    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm alteraCampos={this.alteraCampos.bind(this)}
                        codigo={this.state.codigo}
                        descricao={this.state.descricao}
                        cargaHoraria={this.state.cargaHoraria}
                        preco={this.state.preco}
                        categoria={this.state.categoria}
                        adicionarCurso={this.adicionarCurso.bind(this)}
                        textoBotao={this.state._id && this.state._id !== '' ?'Atualizar' : 'Adicionar'}
                    />
                </div>
                <div className="col-md-6">
                    <CursoList batatas={this.state.data}
                        removerCurso={this.removerCurso.bind(this)}
                        consultarCurso={this.consultarCurso.bind(this)}

                    />
                </div>
            </div>
        )
    }

}
