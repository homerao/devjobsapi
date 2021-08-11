const express = require('express')
const candidaturaRouter = express.Router()
candidaturaRouter.get('/', (req, res, next)=>{
    return res.json("candidatura")
})

candidaturaRouter.get('/find.all', (req, res, next)=>{
    return res.json("find all")
})

candidaturaRouter.get('/find.one', (req, res, next)=>{
    return res.json("find one")
})

candidaturaRouter.get('/find.by/:id', (req, res, next)=>{
    let id = req.params.id
    return res.json("find by id "+ id)
})

candidaturaRouter.post('/create', (req, res, next)=>{
    
    return res.json("create")
})
candidaturaRouter.patch('/update', (req, res, next)=>{
    
    return res.json(" update")
})

candidaturaRouter.get('/update', (req, res, next)=>{
    
    return res.json(" update")
})






module.exports = candidaturaRouter