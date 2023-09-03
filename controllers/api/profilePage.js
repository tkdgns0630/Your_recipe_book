const router = require('express').Router();
const { UserFavourites, User, Recipe, Category } = require('../../models');
const withAuth = require('../../utils/auth');

// get user including favourite recipes
router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        { model: Recipe },
        {
          model: Recipe,
          through: UserFavourites,
          as: 'UserFavRecipes',
        },
      ],
    });
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );
    const user = userData.get({ plain: true });

    res.render('profile', {
      categories,
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete recipe by id
router.delete('/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
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
