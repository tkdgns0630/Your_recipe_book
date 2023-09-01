const router = require('express').Router();
const { Recipe, User, Category } = require('../../models');
const withAuth = require('../../utils/auth');
const upload = require('../../utils/upload');

router.post('/', [withAuth, upload.single('file')], async (req, res) => {
  try {
    console.log(req.file.filename);
    console.log(req.body);
    const recipeData = await Recipe.create({
      ...req.body,
      photo: req.file.filename,
      user_id: req.session.user_id,
    });
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    if (req.session.logged_in) {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Recipe }],
      });

      const user = userData.get({ plain: true });
      const categoryData = await Category.findAll();

      const categories = categoryData.map((category) =>
        category.get({ plain: true })
      );

      res.render('addRecipe', {
        user,
        categories,
        logged_in: req.session.logged_in,
        login: true
      });
      return;
    }
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
