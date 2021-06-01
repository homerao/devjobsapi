const repository = require('../repositories/endereco.repository')


class EnderecoService {

    async create(endereco){
        return repository.create(endereco)
    }

    async update(endereco){
    return repository.update(endereco, {where:{ID:endereco.ID}})
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

module.exports = new EnderecoService