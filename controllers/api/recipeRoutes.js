const router = require('express').Router();
const { Recipe, UserFavourites } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', async (req, res) => {
//   try {
//     const newProject = await Project.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newProject);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

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
  // We find all dishes in the db and set the data equal to dishData
  try {
    const recipeData = await Recipe.findAll({});
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    console.log(recipes);
    res.render('allRecipes', { recipes, logged_in: req.session.logged_in });
  } catch (error) {
    res.status(500).json(err);
  }
});

router.delete('/:id1', async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id1,
        user_id: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
