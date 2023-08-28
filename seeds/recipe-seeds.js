const { Recipe } = require('../models');

const recipieData = [
  {
    name: 'hamburger',
    userId: 4
  },
  {
    name: 'fried rice',
    userId: 1
  },
  {
    name: 'curry',
    userId: 2
  },
  {
    name: 'taco',
    userId: 3
  },
  {
    name: 'spaghetti',
    userId:  3
  },
];

const seedRecipie = () => Recipe.bulkCreate(recipieData);

module.exports = seedRecipie;
