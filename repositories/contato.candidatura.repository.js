
const model = require('../models/Contato.Candidatura')
const {Op} = require('sequelize')

class ContatoCandidaturaRepository {

    async create(contato){
        return model.create(contato)
    }

    async update(contato){
        return model.update(contato,{where: {ID:contato.ID}})
    }

    async findByPk(pk){
      return await (await model.findByPk(pk)).toJSON()
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

module.exports = new ContatoCandidaturaRepository