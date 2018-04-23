'use strict';
module.exports = (sequelize, DataTypes) => {
  var image = sequelize.define('image', {
    id: DataTypes.PRIMARYKEY,
    tag: DataTypes.VARCHAR25,
    comment: DataTypes.VARCHAR125
  }, {});
  image.associate = function(models) {
    models.image.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return image;
};