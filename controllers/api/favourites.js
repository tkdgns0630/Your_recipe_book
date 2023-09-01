const router = require('express').Router();
const { UserFavourites } = require('../../models');
const withAuth = require('../../utils/auth');


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await UserFavourites.destroy({
      where: {
        recipe_id: req.params.id,
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
