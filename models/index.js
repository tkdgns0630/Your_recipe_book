const User = require('./User');
const Recipe = require('./Recipe');
const Category = require('./Category');
const Comment = require('./Comment');
const CategoryTag = require('./CategoryTag');
const UserFavourites = require('./UserFavourtites');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id'
});

Recipe.hasMany(Comment,{
  foreignKey: 'comment_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Recipe,{
  foreignKey:'comment_id'
});

Recipe.belongsToMany(Category, {
  through: CategoryTag,
  foreignKey: 'cat_id',
  onDelete: 'SET NULL'
});

Category.belongsToMany(Recipe, {
  through: CategoryTag,
  foreignKey: 'recipe_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Recipe,{
  through: UserFavourites,
  foreignKey: 'recipe_id',
  onDelete: 'SET NULL'
});

Recipe.belongsToMany(User,{
  through: UserFavourites,
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


module.exports = { User, Recipe, Category, Comment, CategoryTag};
