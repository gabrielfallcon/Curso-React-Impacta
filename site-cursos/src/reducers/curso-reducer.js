const INITIAL_STATE = {

    codigo:       '123',
    descricao:    'curso Informatica',
    cargaHoraria: '10',
    preco:        '100',
    categoria:    'INFORMATICA',
    textoBotao:   'Adicionar',
    lista:        [{_id:'-1', codigo: '214', descricao:'curso teste'}]

}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    
    switch (action.type) {

        case 'ALTERA_CODIGO' :
            return {...state, codigo : action.info}
        case 'ALTERA_DESCRICAO' :
            return {...state, descricao : action.info}
        case 'ALTERA_CARGA' :
            return {...state, cargaHoraria : action.info}
        case 'ALTERA_PRECO' :
            return {...state, preco : action.info}
        case 'ALTERA_CATEGORIA' :
            return {...state, categoria : action.info}
        case 'LISTAR_CURSO' :
            return {...state, lista : action.value}
        
        case 'LIMPAR_FORM' :
            return  INITIAL_STATE

        default: 
            return state
    }

}