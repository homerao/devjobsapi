const sequelize = require('../dbConfig/dbConfig')
const model = require('../models/DESENVOLVEDORES')
const {Op} = require('sequelize')

class DesenvolvedorRepository {
    create(desenvolvedor){
        console.log("repository")
        let result=""
       model.save(desenvolvedor).then((saved)=>{
            result = saved
       }).catch((err)=>{
            result = err
       })
       return result
    }

    update(desenvolvedor){
        let result =0
        model.update(desenvolvedor,{ where:{ID:desenvolvedor.ID}}).then((updated)=>{
         result = 201
        }).catch((err)=>{
        result = -1
        })
        return result
    }
}


module.exports = new DesenvolvedorRepository