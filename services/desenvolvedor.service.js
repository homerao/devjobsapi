const repository = require('../repositories/desenvolvedor.repository')


class DesenvolvedorService {
      create(desenvolvedor){
        console.log("Service")
        return repository.create(desenvolvedor)
      }

      update(desenvolvedor){
        return repository.update(desenvolvedor)
     }
}

module.exports = new DesenvolvedorService