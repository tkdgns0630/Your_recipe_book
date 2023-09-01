const router = require('express').Router();
const { Recipe, Category } = require('../../models');
const withAuth = require('../../utils/auth');

//Get recipe by user id
router.get('/:id', withAuth, async (req, res) => {
  try {
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
    res.render('recipes', {
      categories,
      recipe,
      logged_in: req.session.logged_in,
      login: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
