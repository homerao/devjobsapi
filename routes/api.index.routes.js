const indexRouter = require('express').Router()
const desenvolvedoresRoutes = require('./desenvolvedor.routes')
const candidaturaRoutes = require('./candidatura.routes')
const contaRoutes = require('./conta.routes')
const contatoRoutes = require('./contato.candidatura.routes')
const empresaRoutes = require('./empresa.routes')
const recuperarContaRoutes = require('./recuperar.conta.routes')
const vagaRoutes = require('./vagas.routes')

indexRouter.use('/desenvolvedores',desenvolvedoresRoutes)
indexRouter.use('/candidaturas',candidaturaRoutes)
indexRouter.use('/contas',contaRoutes)
indexRouter.use('/contatos',contatoRoutes)
indexRouter.use('/empresas',empresaRoutes)
indexRouter.use('/recuperar.contas',recuperarContaRoutes)
indexRouter.use('/vagas',vagaRoutes)


indexRouter.get('/', (req, res, next)=>{
     res.send("Api funcionando")
})




module.exports = indexRouter