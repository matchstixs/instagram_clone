'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    id: DataTypes.PRIMARYKEY
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};