const Sequelize = require('../dbConfig');
const {Model, DataTypes} = require('sequelize')

class Endereco extends Model {}

Endereco.init({
  ID: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ID_ENDERECO: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'DESENVOLVEDORES',
      key: 'ID'
    }
  },
  LOGRADOURO: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  ESTADO: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  CIDADE: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  CEP: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  CIDADE_NASCIMENTO: {
    type: DataTypes.STRING(35),
    allowNull: true
  },
  ESTADO_NASCIMENTO: {
    type: DataTypes.STRING(15),
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
  tableName: 'ENDERECOS',
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
      name: "FK_ENDERECOS_DESENVOLVEDORES",
      using: "BTREE",
      fields: [
        { name: "ID_ENDERECO" },
      ]
    },
  ]
});

module.exports = Endereco