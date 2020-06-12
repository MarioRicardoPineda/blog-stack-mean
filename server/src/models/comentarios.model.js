const { Schema, model } = require('mongoose')

const comentarioSchema = new Schema(
  {
    id_autor: {
      type: Schema.Types.ObjectId,
      ref: 'Usuario'
    },
    id_post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
    comentario: {
      type: String
    }
  }
)

module.exports = model('Comentario', comentarioSchema)