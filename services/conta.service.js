const repository = require('../repositories/conta.repository')



class ContaService {

    async create(conta){
        return repository.create(conta)
    }

    async update(conta){
      return repository.update(conta)
    }
    async findByPk(pk){
      return repository.findByPk(pk)
    }
    async findByEmail(email){
      return await repository.findbyEmail(email)
    }

    async findAll(limit, offset){
      return repository.findAll({limit: limit, offset:offset})
    }

    async findall(){
        return repository.findAll()
    }

    async count(){
        return repository.count()
    }
}

module.exports = new ContaService