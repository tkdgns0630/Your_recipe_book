const User = require('./User');
const Recipe = require('./Recipe');
const Category = require('./Category');
const Comment = require('./Comment');
//const CategoryTag = require('./CategoryTag'); Legacy code
const UserFavourites = require('./UserFavourites');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
});

Recipe.hasMany(Comment, {
  foreignKey: 'recipe_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Recipe, {
  foreignKey: 'recipe_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Recipe.belongsTo(Category, {
  foreignKey: 'cat_id',
});

Category.hasMany(Recipe, {
  foreignKey: 'cat_id',
  onDelete: 'CASCADE',
});

User.belongsToMany(Recipe, {
  through: {
    model: UserFavourites,
    unique: 'false',
    onDelete: 'SET NULL',
  },
  as: 'UserFavRecipes',
});

Recipe.belongsToMany(User, {
  through: {
    model: UserFavourites,
    unique: 'false',
    onDelete: 'SET NULL',
  },
  as: 'FavouredRecipes',
});

module.exports = { User, Recipe, Category, Comment, UserFavourites };
