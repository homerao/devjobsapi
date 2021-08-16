const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dbConfig/dbConfig');
const Candidatura = require('./Candidatura')

class Desenvolvedor extends Model {}

Desenvolvedor.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nome_completo: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  cpf: {
    type: DataTypes.CHAR(11),
    allowNull: false
  },
  data_nascto: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  genero: {
    type: DataTypes.ENUM('MASCULINO','FEMININO','N.A'),
    allowNull: true
  },
  estado_civil: {
    type: DataTypes.ENUM('CASADO','SOLTEIRO','DIVORCIADO','AMASIADO'),
    allowNull: true
  },
  nro_filhos: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  nacionalidade: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Date.now()
  },
  updated_at: {
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


module.exports =   Desenvolvedor
