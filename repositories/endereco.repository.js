
const model = require('../models/Endereco')
const {Op} = require('sequelize')

class EnderecoRepository {

    async create(endereco){
        return model.create(endereco)
    }

    async update(candidatura){
        return model.update(endereco,{where: {ID:endereco.ID}})
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

module.exports = new EnderecoRepository