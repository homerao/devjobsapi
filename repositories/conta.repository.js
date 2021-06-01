
const model = require('../models/Conta')
const {Op} = require('sequelize')

class ContaRepository {

    async create(conta){
        return model.create(conta)
    }

    async update(conta){
        return model.update(conta,{where: {ID:conta.ID}})
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

module.exports = new ContaRepository