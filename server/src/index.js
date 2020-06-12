require('./connection')
const express = require('express')
const app = express()

const color = require('colors')
const { PORT } = require('./config')

// middlewares


// rutas



app.listen( PORT, console.log( `Servidor escuchando en el puerto ${PORT}`.yellow ) )