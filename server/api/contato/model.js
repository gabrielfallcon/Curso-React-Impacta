// criando o schema
const restful = require('node-restful');

// referencia ao moongose do resft 
const moongose = restful.mongoose;

// definindo o schema contato
const contatoSchema = new moongose.Schema({

    codigo: { type: Number, required: true },
    nome:   { type: String, required: true },
    email:  { type: String, required: true },
    menssagem: { type: String, required: true }

});

module.exports = restful.model('contato', contatoSchema);