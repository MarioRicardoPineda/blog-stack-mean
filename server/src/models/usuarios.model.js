const { Schema, model } = require('mongoose')

const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    comentario: {
      type: Schema.Types.ObjectId,
      ref: 'Comentario'
    }
  },

  { timestamps: { createdAt: true, updatedAt: true } }
)

module.exports = model('Usuario', usuarioSchema)

