const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING(1234),
    },
    method: {
      type: DataTypes.STRING(1234),
    },
    prepTime:{
      type: DataTypes.INTEGER
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: true
      }
    },
    catId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cat',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

module.exports = Recipe;
