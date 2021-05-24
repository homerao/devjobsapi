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
}


module.exports = new DesenvolvedorRepository