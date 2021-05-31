var DataTypes = require("sequelize").DataTypes;
var _CANDIDATURAS = require("./Candidatura");
var _CONTAS = require("./Conta");
var _CONTATO_CANDIDATURAS = require("./Contato.Candidatura");
var _DESENVOLVEDORES = require("./Desenvolvedor");
var _EMPRESAS = require("./Empresa");
var _ENDERECOS = require("./Endereco");
var _RECUPERAR_CONTAS = require("./Recuperar.Conta");
var _VAGAS = require("./Vaga");

function initModels(sequelize) {
  var CANDIDATURAS = _CANDIDATURAS(sequelize, DataTypes);
  var CONTAS = _CONTAS(sequelize, DataTypes);
  var CONTATO_CANDIDATURAS = _CONTATO_CANDIDATURAS(sequelize, DataTypes);
  var DESENVOLVEDORES = _DESENVOLVEDORES(sequelize, DataTypes);
  var EMPRESAS = _EMPRESAS(sequelize, DataTypes);
  var ENDERECOS = _ENDERECOS(sequelize, DataTypes);
  var RECUPERAR_CONTAS = _RECUPERAR_CONTAS(sequelize, DataTypes);
  var VAGAS = _VAGAS(sequelize, DataTypes);

  CANDIDATURAS.belongsTo(DESENVOLVEDORES, { foreignKey: "ID_DESENVOLVEDOR"});
  DESENVOLVEDORES.hasMany(CANDIDATURAS, { foreignKey: "ID_DESENVOLVEDOR"});
  CANDIDATURAS.belongsTo(VAGAS, { foreignKey: "ID_VAGA"});
  VAGAS.hasMany(CANDIDATURAS, { foreignKey: "ID_VAGA"});
  CONTAS.belongsTo(DESENVOLVEDORES, { foreignKey: "ID_ACC"});
  DESENVOLVEDORES.hasMany(CONTAS, { foreignKey: "ID_ACC"});
  CONTATO_CANDIDATURAS.belongsTo(CANDIDATURAS, { foreignKey: "ID_CANDIDATURA"});
  CANDIDATURAS.hasMany(CONTATO_CANDIDATURAS, { foreignKey: "ID_CANDIDATURA"});
  CONTATO_CANDIDATURAS.belongsTo(DESENVOLVEDORES, { foreignKey: "ID_DESENVOLVEDOR"});
  DESENVOLVEDORES.hasMany(CONTATO_CANDIDATURAS, { foreignKey: "ID_DESENVOLVEDOR"});
  CONTATO_CANDIDATURAS.belongsTo(EMPRESAS, { foreignKey: "ID_EMPRESA"});
  EMPRESAS.hasMany(CONTATO_CANDIDATURAS, { foreignKey: "ID_EMPRESA"});
  ENDERECOS.belongsTo(DESENVOLVEDORES, { foreignKey: "ID_ENDERECO"});
  DESENVOLVEDORES.hasMany(ENDERECOS, { foreignKey: "ID_ENDERECO"});
  RECUPERAR_CONTAS.belongsTo(CONTAS, { foreignKey: "ID_ACC"});
  CONTAS.hasMany(RECUPERAR_CONTAS, { foreignKey: "ID_ACC"});
  VAGAS.belongsTo(EMPRESAS, { foreignKey: "ID_EMPRESA"});
  EMPRESAS.hasMany(VAGAS, { foreignKey: "ID_EMPRESA"});

  return {
    CANDIDATURAS,
    CONTAS,
    CONTATO_CANDIDATURAS,
    DESENVOLVEDORES,
    EMPRESAS,
    ENDERECOS,
    RECUPERAR_CONTAS,
    VAGAS,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
