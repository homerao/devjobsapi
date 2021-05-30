const sequelize = require('../dbConfig/dbConfig')
const model = require('../models/DESENVOLVEDORES')
const {Op} = require('sequelize')

class DesenvolvedorRepository {
    async create(desenvolvedor){
        console.log("create repository")
       return model.create(desenvolvedor)
    }

    async update(desenvolvedor){
         console.log("update repository")
        return model.update(desenvolvedor,{ where:{ID:desenvolvedor.ID}})
    }

    async findAll(limit, offset){
      let results= null
        results = await model.findAll({limit: limit, offset:offset})
         return results
    }




    async count(){
        return model.count()
    }
}


module.exports = new DesenvolvedorRepository