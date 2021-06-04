const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    //Título
    title:{
        type: String,
        required: true
    },
    //Descrição
    description:{
        type: String,
        required: true
    },
    //ano de lançamento
    year:{
        type: Number,
        required: true
    },
    //Gênero do filme
    genre:{
        type: String,
        required: true
    },
    //idioma
    language:{
        type: String,
        required: true
    },
    // avaliação
    available_on:{
        type: String,
        required: true
    },
    //dataCriacao
    created_at: {
        type: Date, 
        required: true,
        default: new Date 
    } 
})


module.exports = mongoose.model('movie', movieSchema)