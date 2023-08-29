const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
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
    prep_time: {
      type: DataTypes.INTEGER,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    cat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
    likes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
    },
    has_nuts: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    vegan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
