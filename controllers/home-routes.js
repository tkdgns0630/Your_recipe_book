const router = require('express').Router();
const { Category, Recipe } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/api/user-profile');
    return;
  }
  res.render('login',{login: true});
});

// route to get all categories and recipies
router.get('/', async (req, res) => {
  const loggedIn = req.session.logged_in;
  const categoryData = await Category.findAll();
  const recipeData = await Recipe.findAll();
  const categories = categoryData.map((category) =>
    category.get({ plain: true })
  );
  const recipes = recipeData.map((recipie) => recipie.get({ plain: true }));
  res.render('all', { recipes, categories, logged_in: loggedIn });
});

// get Recipe by Category id
router.get('/:id', async (req, res) => {
  try {
    const loggedIn = req.session.logged_in;
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    const recipePktData = await Category.findByPk(req.params.id, {
      include: [{ model: Recipe }],
    });
    const recipePK = recipePktData.get({ plain: true });
    res.render('all', { recipePK, categories, logged_in: loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get recipe by id
router.get('/selected/:id', async (req, res) => {
  try {
    const recipePktData = await Recipe.findByPk(req.params.id, {});
    const selectRecipePK = recipePktData.get({ plain: true });
    console.log(selectRecipePK);
    // res.json(selectRecipePK)
    res.render('all', { selectRecipePK });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
