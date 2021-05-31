const Sequelize = require('../dbConfig');
const {Model, DataTypes} = require('sequelize')

class Empresa extends Model {}

Empresa.init({
  ID: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  NOME_EMP: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  SEDE: {
    type: DataTypes.STRING(50),
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
  sequelize,
  tableName: 'EMPRESAS',
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

module.exports = Empresa