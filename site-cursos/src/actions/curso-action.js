import axios from 'axios';

const URL = "http://localhost:3200/api/curso";

export const alteraCodigo = e => {

    return {
        type: 'ALTERA_CODIGO',
        info: e.target.value
    }

}

export const alteraDescricao = e => {

    return {
        type: 'ALTERA_DESCRICAO',
        info: e.target.value
    }

}

export const alteraCarga = e => {

    return {
        type: 'ALTERA_CARGA',
        info: e.target.value
    }

}

export const alteraPreco = e => {

    return {
        type: 'ALTERA_PRECO',
        info: e.target.value
    }

}

export const alteraCategoria = e => {

    return {
        type: 'ALTERA_CATEGORIA',
        info: e.target.value
    }

}
// export const alteraBotao = e => {

//     return {
//         type: 'ALTERA_BOTAO',
//         info: e.target.value
//     }

// }




export const listarCurso = () => {

    return (dispatch) => {

        return axios.get(URL)
            .then(response =>{

            dispatch({ 
                type: 'LISTAR_CURSO',
                value: response.data
            })
    
            },
            (err) => {
                console.log(err)
            }
        )

    }   
    
}

export const adicionarCurso = (codigo, descricao, cargaHoraria, preco, categoria) => {
    
    return (dispatch) => {
     
        return axios.post(URL, {codigo, descricao, cargaHoraria, preco, categoria})
        .then(response =>{
            dispatch({ 
                type: 'LIMPAR_FORM'
            })
        },
        (err) => {
            console.log(err)
        }
        )
    } 

}