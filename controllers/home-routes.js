const router = require('express').Router();
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');

const categories= [
  {
    id: 1,
    category_name: 'asian',
   
  },
  {
    id: 2,
    category_name: 'Italian',
   
  },
  {
    id: 3,
    category_name: 'Indian',
   
  }
]

const recipes= [
  {
    id: 1,
    name: 'asian',
   
  },
  {
    id: 2,
    name: 'Italian',
   
  },
  {
    id: 3,
    name: 'Indian',
   
  }
]
// route to get all categories and recipies
router.get('/', async (req, res) => {
  // const categoryData = await Category.findAll();
  // const recipeData = await Recipe.findAll();

  // const categories = categoryData.map((category) =>
  //   category.get({ plain: true })
  // );
  // const recipes = recipeData.map((recipie) => recipie.get({ plain: true }));

  // console.log('Categories:', categories);
  // console.log('Recipes:', recipes);
 res.render('all', { recipes });

 
});

module.exports = router;
