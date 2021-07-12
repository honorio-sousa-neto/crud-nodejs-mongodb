const Post = require('../models/post')

class PostController {

    async save(req, res){

        const { title, description } = req.body
        if (!title || !description){
            return res.json({
                error: true,
                message: 'Introduza título e descrição'
            })
        }
        try {
            await Post.create(req.body)
            return res.json({
                error: false,
                message: 'Post enviado com sucesso'
            })
        } catch {
            return res.json({
                error: true,
                message: 'Post não enviado'
            })
        }
    }

    async getAll(req, res) {

        try {
            const result = await Post.find()
            return res.json(result)
        } catch {
            return res.json({
                error: true,
                massage: 'Ocorreu um erro'
            })
        }
    }

    async delete(req, res) {
        
        const id = req.params.id
        try {
            const result = await Post.findByIdAndRemove(id)
            if(!result){
                return res.json({
                    error: true,
                    message: 'ID não existente'
                })
            }
            res.json({
                error: false,
                message: 'Post eliminado com sucesso'
            })
        }catch {
            return res.json({
                error: true,
                message: 'Erro na operação'
            })
        }
    }

    async update(req, res){

        const id = req.params.id
        try {
            const result = await Post.findByIdAndUpdate(id, req.body)
            if(!result){
                return res.json({
                    error: true,
                    message: 'ID não existente'
                })
            }
            res.json({
                result,
                error: false,
                message: 'Post atualizado com sucesso'
            })

        }catch {
            return res.json({
                error: true,
                message: 'Erro na operação'
            })
        }
    }
}

module.exports = new PostController()