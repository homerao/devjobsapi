const service = require('../services/desenvolvedor.service')
const acc_service = require('../services/conta.service')
const sequelize = require('../dbConfig/dbConfig')

class DesenvolvedorController {
      async create(req, res, next){
        console.log("controller")
        console.log(req.body)
        
          let desenvolvedor = {}
          let acc = {}
          desenvolvedor.nome_completo = req.body.nome_completo;
          desenvolvedor.cpf = req.body.cpf
          desenvolvedor.created_at = new Date();
          desenvolvedor.updated_at = new Date();
          acc.email = req.body.email
          acc.passwrd = req.body.senha
          acc.created_at = new Date();
          console.log(desenvolvedor)
          let cpf = await service.findByCpf(desenvolvedor.cpf)
          console.log(cpf)
          if(cpf !== null){
            res.json('já existe esse cpf na base de dados')
          } else {

                console.log('try')
                let dev = await service.create(desenvolvedor)
                acc.id_acc = await dev.id
                acc.created_at = new Date();
                acc.updated_at = new Date();
                await acc_service.create(acc)

            res.json(201)

          }
          
             
      }

      async update(req, res, next){
          let desenvolvedor = req.body
          let updated = await service.update(desenvolvedor)
         res.json(updated)
      }


      async findAll(req, res, next){
       let {limit, offset} = req.query
       console.log("limit "+ limit + " offset" +offset)
       let results = await service.findallPaginated( limit, offset)
       console.log(results)
       return res.json(results)
      }

      
}

module.exports = new DesenvolvedorController