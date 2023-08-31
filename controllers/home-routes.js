const router = require('express').Router();
const { Category, Recipe, User, UserFavourites } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
      // include: [{ model: UserFavourites }],
    });
    const user = userData.get({ plain: true });
   
    res.render('profile', {user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [
//         { model: Recipe, through: UserFavourites, as: 'UserFavRecipes' },
//       ],
//     });
//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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

//  get Recipe by Category id
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    const recipePktData = await Category.findByPk(req.params.id, {
      include: [{ model: Recipe }],
    });
    const recipePK = recipePktData.get({ plain: true });
    // res.json(recipePK);
    // console.log(recipePK);
    res.render('all', { recipePK, categories });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
