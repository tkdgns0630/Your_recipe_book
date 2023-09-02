const router = require('express').Router();
const { Category, Recipe } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  const categoryData = await Category.findAll();
  const categories = categoryData.map((category) =>
    category.get({ plain: true })
  );
  if (req.session.logged_in) {
    res.redirect('/api/user-profile');
    return;
  }
  res.render('login', { categories, login: true });
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
router.get('/recipes/:id', withAuth, async (req, res) => {
  try {
    const loggedIn = req.session.logged_in;
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    const recipeData = await Recipe.findByPk(req.params.id, {
      where: {
        user_id: req.session.user_id,
      },
    });
    const recipe = recipeData.get({ plain: true });
    res.render('recipes', { recipe, categories, logged_in: loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
