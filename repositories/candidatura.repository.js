
const model = require('../models/Candidatura')
const {Op} = require('sequelize')

class CandidaturaRepository {

    async create(candidatura){
        return model.create(candidatura)
    }

    async update(candidatura){
        return model.update(candidatura,{where: {ID:candidatura.ID}})
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

module.exports = new CandidaturaRepository