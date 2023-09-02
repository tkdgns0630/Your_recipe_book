const router = require('express').Router();
const { Recipe, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      where: {
        user_id: req.session.user_id,
      },
    });
    const recipe = recipeData.get({ plain: true });
    const commentData = await Comment.findAll({
      where: { recipe_id: req.params.id },
    });
    // serialize the data
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    res.render('recipes', {
      recipe,
      comments,
      logged_in: req.session.logged_in,
      banner:true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//update likes count
router.put('/:id', withAuth, (req, res) => {
  const action = req.body.action;
  const recipeId = req.body.recipeId;
  const counter = action === '\u2661' ? 1 : -1;
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
    console.log(req.body);
    const recipeData = await Comment.create({
      recipe_id: req.body.recId,
      body: req.body.commentText,
      user_id: req.session.user_id,
    });
    console.log(recipeData);
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
