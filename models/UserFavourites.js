const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserFavourites extends Model {}

UserFavourites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipe',
        key: 'id',
        unique: false,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_favourites',
  }
);

module.exports = UserFavourites;
