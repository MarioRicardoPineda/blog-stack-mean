const { Schema, model } = require('mongoose')

const postSchema = new Schema(
  {
    autor: {
      type: String,
      required: true
    },
    categoria: {
      type: String,
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
    etiquetas: []
  },
  { timestamps: { createdAt: true, updatedAt: true } }
)

module.exports = model('post', postSchema)