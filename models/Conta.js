const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONTAS', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_ACC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DESENVOLVEDORES',
        key: 'ID'
      }
    },
    EMAIL: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "EMAIL"
    },
    PASSWRD: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    ACC_STATUS: {
      type: DataTypes.ENUM('DESATIVADA','ATIVA','BLOQUEADA','INATIVA'),
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
};
