const express = require('express')

const routes = express.Router()

const ImcController = require('./controllers/imcController')

routes.get('/imc/historico', ImcController.listar)

routes.post('/imc/historico', ImcController.criar)

module.exports = routes