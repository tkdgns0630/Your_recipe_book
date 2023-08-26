const router = require('express').Router();
const { Recipe } = require('../models');
const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// route to get all dishes
router.get('/', async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  const recipeData = await Recipe.findAll().catch((err) => {
    res.json(err);
  });
  const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  res.render('all', { recipes });
});
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;