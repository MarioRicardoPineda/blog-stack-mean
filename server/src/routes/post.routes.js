const router = require('express').Router()
const { PostController } = require('../controllers')

router.get('/post', PostController.getPosts)
router.post('/post', PostController.createPost)
router.put('/post/:id', PostController.updatePost)
router.delete('/post/:id', PostController.deletePost)

module.exports = router