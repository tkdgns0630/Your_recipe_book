const router = require('express').Router();
const { Recipe, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      // where: {
      //   userId: req.session.user_id,
      // },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found !' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  // We find all recipes in the db and set the data equal to recipeData
  try {
    const recipeData = await Recipe.findAll({});
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    console.log(recipes);
    res.render('allRecipes', { recipes, logged_in: req.session.logged_in });
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Recipe }],
    });
    const user = userData.get({ plain: true });
    // const user = userData.map((recipe) => recipe.get({ plain: true }));
    res.render('recipes', { user, logged_in: req.session.logged_in });
  } catch (error) {
    res.status(500).json(err);
  }
});



module.exports = router;
