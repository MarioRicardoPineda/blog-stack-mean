require('./connection')
require('colors')

const express = require('express')
const path = require('path')
const cors = require('cors')

// modulos locales
const { PORT } = require('./config')

// Inicializaciones
const app = express()

// middlewares
app.use(express.urlencoded({extended: true}))
app.use( express.static( path.join(__dirname + '/public') ) )
app.use(express.json())
app.use(cors())

// rutas
const { usuarioRutas, postRutas } = require('./routes')
app.use( usuarioRutas )
app.use( postRutas )

// Server
app.listen( PORT, console.log( `Servidor escuchando en el puerto ${PORT}`.yellow ) )