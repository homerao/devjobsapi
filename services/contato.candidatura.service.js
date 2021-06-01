const repository = require('../repositories/contato.candidatura.repository')


class ContatoCandidaturaService {

    async create(contatoCandidatura){
        return repository.create(contatoCandidatura)
    }

    async update(contatoCandidatura){
        return repository.update(contatoCandidatura, {where:{ID:contatoCandidatura.ID}})
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

module.exports = new ContatoCandidaturaService