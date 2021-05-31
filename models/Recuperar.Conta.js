const Sequelize = require('../dbConfig');
const {Model, DataTypes} = require('sequelize')

class RecuperarConta extends Model {}

RecuperarConta.init({
  ID: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  CODIGO: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ID_ACC: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CONTAS',
      key: 'ID'
    }
  },
  STATUS_RECUPERACAO: {
    type: DataTypes.ENUM('RECUPERADO','EXPIRADO','REJEITADO'),
    allowNull: true
  },
  CREATED_AT: {
    type: DataTypes.DATE,
    allowNull: true
  },
  UPDATED_AT: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  Sequelize,
  tableName: 'RECUPERAR_CONTAS',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "ID" },
      ]
    },
    {
      name: "FK_RECUPERAR_CONTAS_CONTAS",
      using: "BTREE",
      fields: [
        { name: "ID_ACC" },
      ]
    },
  ]
})

module.exports = RecuperarConta