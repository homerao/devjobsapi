const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dbConfig/dbConfig');

class Desenvolvedor extends Model {}

Desenvolvedor.init({
  ID: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  NOME_COMPLETO: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  CPF: {
    type: DataTypes.CHAR(11),
    allowNull: false
  },
  DATA_NASCTO: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  GENERO: {
    type: DataTypes.ENUM('MASCULINO','FEMININO','N.A'),
    allowNull: true
  },
  ESTADO_CIVIL: {
    type: DataTypes.ENUM('CASADO','SOLTEIRO','DIVORCIADO','AMASIADO'),
    allowNull: true
  },
  NRO_FILHOS: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  NACIONALIDADE: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  CREATED_AT: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Date.now()
  },
  UPDATED_AT: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Date.now()
  }
}, {
  sequelize,
  tableName: 'DESENVOLVEDORES',
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
  ]
});
module.exports = Desenvolvedor
