
class postController {

  async getPosts(req, res) {

    return res.json({ok: true, msg: 'Lista de posts'})

  }

  async createPost(req, res) {

    return res.json({ok: true, msg: 'post creado'})

  }

  async updatePost(req, res) {

    const id = req.params.id

    return res.json({ok: true, msg: `post con id '${id}' actualizado`})

  }

  async deletePost(req, res) {

    const id = req.params.id

    return res.json({ok: true, msg: `post con id '${id}' eliminado`})

  }

}

module.exports = new postController()