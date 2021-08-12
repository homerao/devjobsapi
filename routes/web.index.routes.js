const webRouter = require('express').Router()





webRouter.get('/', (req, res, next)=>{
     res.send("Api funcionando", {"logged":"false"})
})




module.exports = webRouter