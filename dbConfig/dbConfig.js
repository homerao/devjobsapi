const Sequelize = require('sequelize')



module.exports  = new Sequelize('devjobs',process.env.USER,process.env.PASSWORD,{host:process.env.MYSQL_HOST, dialect:process.env.DIALECT})




