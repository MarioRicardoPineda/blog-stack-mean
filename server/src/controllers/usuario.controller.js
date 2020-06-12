
class usuarioController {

  async getUsuarios(req, res) {

    return res.json({ok: true, msg: 'Lista de usuarios'})

  }

  async createUsuario(req, res) {

    return res.json({ok: true, msg: 'usuario creado'})

  }

  async updateUsuario(req, res) {

    const id = req.params.id

    return res.json({ok: true, msg: `usuario con id '${id}' actualizado`})

  }

  async deleteUsuario(req, res) {

    const id = req.params.id

    return res.json({ok: true, msg: `usuario con id '${id}' eliminado`})

  }

}

module.exports = new usuarioController()