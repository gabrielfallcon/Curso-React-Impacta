// criando o schema 
const restful = require('node-restful');

// referêcia ao mongoose do restful 
const mongoose = restful.mongoose;

// definindo o schema aluno 
const alunoSchema = new mongoose.Schema({

    codigo:     {type: Number, required: true},
    nome:       {type: String, required: true},
    idade:      {type: Number, required: true},
    ensino:     {type: String, uppercase: true}, 
    enum:       ['FUNDAMENTAL', 'MEDIO', 'SUPERIOR']

});

module.exports = restful.model('aluno', alunoSchema);