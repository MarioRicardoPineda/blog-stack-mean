const { Schema, model } = require('mongoose')

const categoriaSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      maxlength: 30
    }
  }
)

module.exports = model('Categoria', categoriaSchema)