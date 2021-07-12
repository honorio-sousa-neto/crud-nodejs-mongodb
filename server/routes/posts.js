const { Router } = require('express')
const Post = require('../controllers/PostController')

const route = new Router()

route.post('/post', Post.save)
route.get('/post', Post.getAll)
route.delete('/post/:id', Post.delete)
route.patch('/post/:id', Post.update)

module.exports = route