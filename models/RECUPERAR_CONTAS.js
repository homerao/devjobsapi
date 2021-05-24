const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RECUPERAR_CONTAS', {
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
    sequelize,
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
  });
};
