const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VAGAS', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_EMPRESA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EMPRESAS',
        key: 'ID'
      }
    },
    TITULO: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(600),
      allowNull: true
    },
    MEDIA_LINK: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    MIN_SALARIO: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    MAX_SALARIO: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    DATA_INICIO: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DATA_FIM: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    STATUS_VAGA: {
      type: DataTypes.ENUM('CANCELADA','PRORROGADA','ATIVA','FINALIZADA'),
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
    tableName: 'VAGAS',
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
        name: "FK_VAGAS_EMPRESAS",
        using: "BTREE",
        fields: [
          { name: "ID_EMPRESA" },
        ]
      },
    ]
  });
};
