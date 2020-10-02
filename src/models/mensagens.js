'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Mensagens.init({
    texto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mensagens',
  });
  return Mensagens;
};