const { Schema, model } = require('mongoose')

const postSchema = new Schema(
  {
    autor: {
      type: Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true
    },
    categoria: {
      type: Schema.Types.ObjectId,
      ref: 'Categoria',
      required: true 
    },
    titulo: {
      type: String,
      required: true
    },
    descricion: {
      type: String,
      required: true
    },
    review: {
      type: String,
      required: true,
      maxlength: 100
    },
    imagen?: {
      type: String,
      required: false
    },
    etiquetas: [
      {
        type: String
      }
    ]
  },
  { timestamps: { createdAt: true, updatedAt: true } }
)

module.exports = model('Post', postSchema)