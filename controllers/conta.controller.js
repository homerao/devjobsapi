const service = require('../services/desenvolvedor.service')
const acc_service = require('../services/conta.service')
const sequelize = require('../dbConfig/dbConfig')
let session = require('express-session')

class ContaController {
      async login(req, res){
        let email = req.body.email
        let acc = await acc_service.findByEmail(email)
        let usuario;
        if(acc !== null){
          usuario = await service.findOne(acc.id_acc)
          console.log(usuario)
          let data = {user:usuario, logged:true, title:'Menu do usuário'}
          req.session.data = data
          res.redirect('carregar-menu')
        } else {
          res.redirect('/login')
        }
      }

      async logout(req, res){
        let session = req.session
        session.data = null
        res.redirect('/home')
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

module.exports = new ContaController