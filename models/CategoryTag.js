//This file is legacy Code and currently does nothing

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CategoryTag extends Model {}

CategoryTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'recipe',
        key: 'id',
        unique: false
      }
    },
    catId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cat_tag',
  }
);

module.exports = CategoryTag;
