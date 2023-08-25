const { Recipe } = require('../models');

const recipieData = [
  {
    name: 'hamburger',
  },
  {
    name: 'fried rice',
  },
  {
    name: 'curry',
  },
  {
    name: 'taco',
  },
  {
    name: 'spaghetti',
  },
];

const seedRecipie = () => Recipe.bulkCreate(recipieData);

module.exports = seedRecipie;
