'use strict';
module.exports = (sequelize, DataTypes) => {
  var image = sequelize.define('image', {
    tag: DataTypes.STRING(25),
    comment: DataTypes.STRING(125)
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