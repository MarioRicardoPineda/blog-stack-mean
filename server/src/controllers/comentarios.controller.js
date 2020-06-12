class ComentarioController {

  async getComentarios(req, res) {

    return res.json({ok: true, msg: 'Lista de Comentarios'})

  }

  async createComentario(req, res) {

    return res.json({ok: true, msg: 'Comentario creado'})

  }

  async updateComentario(req, res) {

    const id = req.params.id

    return res.json({ok: true, msg: `Comentario con id '${id}' actualizado`})

  }

  async deleteComentario(req, res) {

    const id = req.params.id

    return res.json({ok: true, msg: `Comentario con id '${id}' eliminado`})

  }

}

module.exports = new ComentarioController()