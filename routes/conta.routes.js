const contaRouter = require('express').Router()
const contaController = require('../controllers/conta.controller')

contaRouter.post('/login', (req, res)=>{
    
    contaController.login(req, res)
})
contaRouter.get('/logout', (req,res)=>{
    contaController.logout(req, res)
})

contaRouter.get('/carregar-menu', (req, res)=>{
    
    let session = req.session
    let data = session.data
   return res.render('developer/main_menu', data)
})


module.exports = contaRouter