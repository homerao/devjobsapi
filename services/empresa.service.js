const repository = require('../repositories/empresa.repository')


class EmpresaService {

    async create(empresa){
       return repository.create(empresa)
    }

    async update(empresa){
      return repository.update(empresa)
    }
    async findByPk(pk){
      return repository.findByPk(pk)
    }


    async findAll(limit, offset){
        return repository.findAll({limit:limit, offset:offset})
    }

    async findall(){
        return repository.findAll()
    }

    async count(){
        return repository.count()
    }
}

module.exports = new EmpresaService