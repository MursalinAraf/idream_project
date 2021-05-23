'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    static associate(models) {
      // define association here
    }

    toJSON(){ return {...this.get(), id: undefined}  }
  };
  user.init({
    uuid: {
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4
    },
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'user',
  });
  return user;
};