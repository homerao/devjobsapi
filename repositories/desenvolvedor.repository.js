
const model = require('../models/Desenvolvedor')
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

    async findByPk(pk){
        let result = null
        result = await model.findByPk(pk)
        if(result !== null){
            return result
        } else {
            return null
        }
        
    }
    async findOne(id){
        let data = null
        model.findOne({where: { id:{[Op.eq]:id}}})
        .then((result)=>{ data= result 
                         })
        .catch((err)=>{ console.log('erro, não foi possível' + err); return null})
        
    }

    async findByCpf(cpf){
        let data = null
     model.findOne({where: { cpf:{[Op.eq]:cpf}}})
     .then((result)=>{ data= result 
                      })
     .catch((err)=>{ console.log('erro, não foi possível'); return null})
     
         
         return data
    }


    async count(){
        return model.count()
    }
}


module.exports = new DesenvolvedorRepository