const {Type, Brand}=require('../models/models')
const ApiError=require('../error/ApiError')

class TypeController {
    async create(req,res){
        const {name}=req.body
        const type=await Type.create({name})
        return res.json(type)
    }
    async getAll(req,res){
        const types=await Type.findAll()
        return res.json(types)

    }
    async delete(req, res,next) {
        const {id} = req.params
        await Type.destroy({
            where: {id},
        })
        return res.json({message:"удалено"})
    }
    async update(req, res, next) {
        const {id} = req.params
        const {name} = req.body
        await Type.update({
                name: name,
            },
            {
                where: {id},
            }
        )
        return res.json({message:"Обновлено"})
    }
}

module.exports=new TypeController()