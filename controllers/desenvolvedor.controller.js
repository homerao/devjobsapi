const service = require('../services/desenvolvedor.service')

class DesenvolvedorController {
      create(req, res, next){
        console.log("controller")
        console.log(req.body)
          let desenvolvedor = req.body
            return res.json(service.create(desenvolvedor))
      }

      update(req, res, next){
          let desenvolvedor = req.body
        return res.json(service.update(desenvolvedor))
  }
}

module.exports = new DesenvolvedorController