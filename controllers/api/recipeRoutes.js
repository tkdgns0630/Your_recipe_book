const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      where: {
        user_id: req.session.user_id,
      },
    });
    const recipe = recipeData.get({ plain: true });
    res.render('recipes', {
      recipe,
      logged_in: req.session.logged_in,
      login: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put('/:id', (req, res) => {
  const action = req.body.action;
  const recipeId = req.body.recipeId;
  const counter = action === '\u2661' ? 1 : -1;
  const recipeData= Recipe.increment(
    { likes: +counter },
    {
      where: { id: recipeId },
    }
  );
  res.status(200).json(recipeData);
});
module.exports = router;
