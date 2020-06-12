require('./connection')
const express = require('express')
const app = express()

const color = require('colors')

// middlewares


// rutas



app.listen( 9000, console.log( `Servidor escuchando en el puerto ${9000}`.yellow ) )