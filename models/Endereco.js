const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Endereco = sequelize.define('Endereco', {
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  logradouro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  localidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Endereco;
