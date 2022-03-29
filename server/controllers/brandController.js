const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const type = await Brand.create({name})
        return res.json(type)

    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async delete(req, res, next) {
        const {id} = req.params
        await Brand.destroy({
            where: {id},
        })
        return res.json({message: "удалено"})
    }

    async update(req, res, next) {
        const {id} = req.params
        const {name} = req.body
       await Brand.update({
                name: name,
            },
            {
                where: {id},
            }
        )
        return res.json({message:"Обновлено"})
    }
}

module.exports = new BrandController()