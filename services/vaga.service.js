const repository = require('../repositories/vaga.repository')


class VagaService {

    async create(vaga){
      return repository.create(vaga)
    }

    async update(vaga){
        return repository.update(vaga,{where:{ID:vaga.ID}})
    }
    async findByPk(pk){
        return repository.findByPk(pk)
    }

    async findAll(limit, offset){
        return repository.findAll({limit:limit, offset:offset })
    }



    async findall(){

    }

    async count(){
        
    }
}

module.exports = new VagaService