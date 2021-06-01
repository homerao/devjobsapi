const repository = require('../repositories/candidatura.repository')

class CandidaturaService {

    async create(candidatura){
          return repository.create(candidatura)
    }

    async update(candidatura){
        return repository.update(candidatura,{where:{ID:candidatura.ID}})
    }
    async findByPk(pk){
        return repository.findByPk(pk)
    }
   

    async findAll(limit, offset){
          return repository.findAll({limit:limit, offset: offset})
    }

    async findall(){
        return repository.findAll()
    }

    async count(){
        return repository.count()
    }
}

module.exports = CandidaturaService