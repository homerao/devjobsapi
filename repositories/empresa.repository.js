
const model = require('../models/Empresa')
const {Op} = require('sequelize')

class EmpresaRepository {

    async create(empresa){
         return model.create(empresa)
    }

    async update(empresa){
        return model.update(empresa,{ where:{ID:empresa.ID}})
    }

    async findByPk(pk){
        return model.findByPk(pk)
    }

    async findAll(limit, offset){
        return model.findAll({limit:limit, offset:offset})
    }

    async findall(){
        return model.findAll()
    }

    async count(){
        return model.count()
    }
}

module.exports = EmpresaRepository