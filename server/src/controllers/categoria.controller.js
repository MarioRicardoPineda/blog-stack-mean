class CategoriaController {

  async getCategorias(req, res) {

    return res.json({ok: true, msg: 'Lista de Categorias'})

  }

  async createCategoria(req, res) {

    return res.json({ok: true, msg: 'Categoria creado'})

  }

  async updateCategoria(req, res) {

    const id = req.params.id

    return res.json({ok: true, msg: `Categoria con id '${id}' actualizado`})

  }

  async deleteCategoria(req, res) {

    const id = req.params.id

    return res.json({ok: true, msg: `Categoria con id '${id}' eliminado`})

  }

}

module.exports = new CategoriaController()