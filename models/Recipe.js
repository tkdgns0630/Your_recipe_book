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
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  catId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id',
    },
  },
  likes: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: 0
  },
  hasNuts: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  vegan: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  photo:{
    type: DataTypes.BLOB("long"),
  }
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
