
const mongoose = require('mongoose')
const color = require('colors')

const { MONGO_URI } = require('./config')

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then( _ => { 
  console.log(`Conexión exitosa a ${MONGO_URI}`.cyan) 
} )
.catch( err => {
  console.log( color.red(err.message) )
} )