const { UserFavourites, Recipe } = require('../models');

const userFavData = [
  {
    user_id: 1,
    recipe_id: [1,3,5]
  },
  {
    user_id: 2,
    recipe_id: [2,4,5]
  },
  {
    user_id: 3,
    recipe_id: [4,5]
  },
  {
    user_id: 4,
    recipe_id: [1,2,3]
  },
  {
    user_id: 5,
    recipe_id: [3,4]
  },
];

const seedUserFavourite = () => UserFavourites.bulkCreate(userFavData);

module.exports = seedUserFavourite;
