const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()

app.use(express.json())
app.use(cors())

// Mongo
mongoose.connect('mongodb://root:rootpwd@localhost:27017/imc_historico?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

requireDir('./models')

app.use('/api', require('./routes'))

app.listen(3333)