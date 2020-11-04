const mongoose = require('mongoose')

const ImcSchema = new mongoose.Schema({
    peso: {
        type: Number
    },
    altura: {
        type: Number
    },
    imc: {
        type: Number
    },
    classificacao: {
        type: String
    },
    grauObesidade: {
        type: String
    }
})

const Imc = mongoose.model('imc', ImcSchema)