
const model = require('../models/Vaga')
const {Op} = require('sequelize')


class VagaRepository {

    async create(vaga){
        return model.create(vaga)
    }

    async update(vaga){
        return model.update(vaga,{where: {ID:vaga.ID}})
    }

    async findByPk(pk){
      return model.findByPk(pk)
    }

    async findAll(limit, offset){
        return model.findAll({limit:limit, offset: offset})
    }

    async findAll(){
        return model.findAll()
    }

    async count(){
        return model.count()
    }
}

module.exports = new VagaRepository