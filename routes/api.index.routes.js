const indexRouter = require('express').Router()
const desenvolvedoresRoutes = require('./desenvolvedores.routes')

indexRouter.use('/desenvolvedores',desenvolvedoresRoutes)

indexRouter.get('/', (req, res, next)=>{
     res.send("Api funcionando")
})




module.exports = indexRouter