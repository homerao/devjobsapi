const service = require('../services/desenvolvedor.service')

class DesenvolvedorController {
      async create(req, res, next){
        console.log("controller")
        console.log(req.body)
          let desenvolvedor = req.body
          let saved = await service.create(desenvolvedor)
             res.json(saved)
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