const port = 3003

const bodyParser = require('body-parser')

const express = require('express')
const server = express()


//recebe dados que podem ter sido mandandos por formularios
server.use(bodyParser.urlencoded({extended: true}))// torna o badyParser resposável pela interpretação dos dados vindo dos formulários

//rece dados e tranforma dados json em objetos
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})


