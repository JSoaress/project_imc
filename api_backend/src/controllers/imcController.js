const mongoose = require('mongoose')

const ImcModel = mongoose.model('imc')

module.exports = {
    async listar(req, res) {
        const historics = await ImcModel.find()

        return res.json(historics)
    },

    async criar(req, res) {
        const { altura, peso } = req.body

        let mAltura = altura / 100

        let imc = peso / Math.pow(mAltura, 2)

        let classificacao = null
        let grauObesidade = null

        if(imc <= 18.5) {
            classificacao = 'Magreza'
            grauObesidade = 'Zero'
        }else if(imc > 18.5 && imc <= 24.9) {
            classificacao = 'Normal'
            grauObesidade = 'Zero'
        }else if(imc >= 25 && imc <= 29.9) {
            classificacao = 'Sobrepeso'
            grauObesidade = 'Um'
        }else if(imc >= 30 && imc <= 39.9) {
            classificacao = 'Obsesidade'
            grauObesidade = 'Dois'
        }else {
            classificacao = 'Obesidade Grave'
            grauObesidade = 'Três'
        }s

        let historic = {
            altura,
            peso,
            'imc': imc.toFixed(2),
            classificacao,
            grauObesidade
        }

        const newHistoric = ImcModel.create(historic)

        return res.status(201).json(newHistoric)
    }
}