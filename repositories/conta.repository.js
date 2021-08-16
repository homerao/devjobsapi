
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
    async findbyEmail(email){
       let result = await model.findOne({where:{email:{[Op.eq]:email}}})
       return await result.email
    }
    async findAccount(email){
        let result = await model.findOne({where:{email:{[Op.eq]:email}}})
       return await result.toJSON()

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