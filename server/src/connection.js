
const mongoose = require('mongoose')
const color = require('colors')

const MONGO_URI = 'mongodb://localhost:27017/bloggeros'
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then( _ => { 
  console.log(`Conexión a DDBB ${MONGO_URI} exitosa`.cyan) 
} )
.catch( err => {
  console.log( color.red(err.message) )
} )