const { Recipe } = require('../models');

const recipieData = [
  {
    name: 'hamburger',
    user_id:[4]
  },
  {
    name: 'fried rice',
    user_id:1
  },
  {
    name: 'curry',
    user_id:2
  },
  {
    name: 'taco',
    user_id:3
  },
  {
    name: 'spaghetti',
    user_id:3
  },
];

const seedRecipie = () => Recipe.bulkCreate(recipieData);

module.exports = seedRecipie;
