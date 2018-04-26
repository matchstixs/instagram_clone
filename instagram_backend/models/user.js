'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};