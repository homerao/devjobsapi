const service = require('../services/desenvolvedor.service')

class DesenvolvedorController {
      async create(req, res, next){
        console.log("controller")
        console.log(req.body)
          let desenvolvedor = req.body
          let saved = await service.create(desenvolvedor)
             res.json(saved)
      }

      update(req, res, next){
          let desenvolvedor = req.body
         res.json(service.update(desenvolvedor))
  }
}

module.exports = new DesenvolvedorController