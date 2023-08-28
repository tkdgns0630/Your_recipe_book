const User = require('./User');
const Recipe = require('./Recipe');
const Category = require('./Category');
const Comment = require('./Comment');
//const CategoryTag = require('./CategoryTag'); Legacy code
const UserFavourites = require('./UserFavourtites');

Recipe.hasMany(Comment,{
  foreignKey: 'comment_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Recipe,{
  foreignKey:'comment_id'
});

User.hasMany(Comment,{
  foreignKey:'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User,{
  foreignKey:'user_id'
});

Recipe.belongsTo(Category, {
  foreignKey: 'cat_id',
});

Category.hasManyMany(Recipe, {
  foreignKey: 'cat_id',
  onDelete: 'CASCADE'
});

User.hasMany(Recipe,{
  through: UserFavourites,
  foreignKey: 'recipe_id',
});

Recipe.hasMany(User,{
  through: UserFavourites,
  foreignKey: 'user_id',
});


module.exports = { User, Recipe, Category, Comment, UserFavourites};
