const Sequelize = require('../dbConfig');
const {Model, DataTypes} = require('sequelize')

class ContatoCandidatura extends Model {}


ContatoCandidatura.init({
  ID: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ID_CANDIDATURA: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CANDIDATURAS',
      key: 'ID'
    }
  },
  ID_EMPRESA: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'EMPRESAS',
      key: 'ID'
    }
  },
  ID_DESENVOLVEDOR: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'DESENVOLVEDORES',
      key: 'ID'
    }
  },
  TITULO_MENSAGEM: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  MENSAGEM: {
    type: DataTypes.STRING(600),
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
  tableName: 'CONTATO_CANDIDATURAS',
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
      name: "FK_CONTATO_CANDIDATURAS_EMPRESAS",
      using: "BTREE",
      fields: [
        { name: "ID_EMPRESA" },
      ]
    },
    {
      name: "FK_CONTATO_CANDIDATURAS_DESENVOLVEDOR",
      using: "BTREE",
      fields: [
        { name: "ID_DESENVOLVEDOR" },
      ]
    },
    {
      name: "FK_CONTATO_CANDIDATURAS_CANDIDATURAS",
      using: "BTREE",
      fields: [
        { name: "ID_CANDIDATURA" },
      ]
    },
  ]
});

module.exports = ContatoCandidatura