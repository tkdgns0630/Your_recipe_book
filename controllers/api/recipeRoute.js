const router = require('express').Router();
const { Recipe, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//update likes count
router.put('/:id', withAuth, (req, res) => {
  const action = req.body.action;
  const recipeId = req.body.recipeId;
  const counter = action === '\u2661' ? 1 : -1;
  //increase like by one
  const recipeData = Recipe.increment(
    { likes: +counter },
    {
      where: { id: recipeId },
    }
  );
  res.status(200).json(recipeData);
});
//comments add
router.post('/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Comment.create({
      recipe_id: req.body.recId,
      body: req.body.commentText,
      user_id: req.session.user_id,
    });
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
