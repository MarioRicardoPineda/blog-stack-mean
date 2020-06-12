const router = require('express').Router()
const { UsuarioController } = require('../controllers')

router.get('/usuario', UsuarioController.getUsuarios)
router.post('/usuario', UsuarioController.createUsuario)
router.put('/usuario/:id', UsuarioController.updateUsuario)
router.delete('/usuario/:id', UsuarioController.deleteUsuario)


module.exports = router