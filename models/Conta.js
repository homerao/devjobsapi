const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dbConfig/dbConfig');

class Conta extends Model {}

Conta.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_acc: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'DESENVOLVEDORES',
      key: 'ID'
    }
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: "EMAIL"
  },
  passwrd: {
    type: DataTypes.STRING(128),
    allowNull: true
  },
  acc_status: {
    type: DataTypes.ENUM('DESATIVADA','ATIVA','BLOQUEADA','INATIVA'),
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'CONTAS',
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
      name: "EMAIL",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "EMAIL" },
      ]
    },
    {
      name: "FK_CONTAS_DESENVOLVEDORES",
      using: "BTREE",
      fields: [
        { name: "ID_ACC" },
      ]
    },
  ]
});
module.exports = Conta