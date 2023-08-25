const { Category } = require('../models');

const categoryData = [
  {
    cat_name: 'American',
  },
  {
    cat_name: 'Asian',
  },
  {
    cat_name: 'Indian',
  },
  {
    cat_name: 'Mexican',
  },
  {
    cat_name: 'Italian',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
