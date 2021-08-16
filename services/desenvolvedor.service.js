const repository = require('../repositories/desenvolvedor.repository')


class DesenvolvedorService {
      create(desenvolvedor){
        console.log("Service")
        return repository.create(desenvolvedor)
      }

     update(desenvolvedor){
        return repository.update(desenvolvedor)
     }

    async findallPaginated(limit, offset){
      return await repository.findAll(limit, offset)
     }

    async findByCpf(cpf){
      return await repository.findByCpf(cpf)  
    }


     count(){
       return repository.count()
     }
}

module.exports = new DesenvolvedorService