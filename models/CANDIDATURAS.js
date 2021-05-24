const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CANDIDATURAS', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_VAGA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'VAGAS',
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
    DATA_CANDIDATURA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STATUS_CANDIDATURA: {
      type: DataTypes.ENUM('CANCELADA','ATIVA','DESATIVADA','FINALIZADA'),
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
    tableName: 'CANDIDATURAS',
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
        name: "FK_CANDIDATURAS_DESENVOLVEDORES",
        using: "BTREE",
        fields: [
          { name: "ID_DESENVOLVEDOR" },
        ]
      },
      {
        name: "FK_CANDIDATURAS_VAGAS",
        using: "BTREE",
        fields: [
          { name: "ID_VAGA" },
        ]
      },
    ]
  });
};
