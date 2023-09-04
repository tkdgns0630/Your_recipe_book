const router = require('express').Router();
const { Recipe, Category } = require('../../models');
const withAuth = require('../../utils/auth');
const upload = require('../../utils/upload');

// recipe create with uploading file using middleware
router.post('/', [withAuth, upload.single('file')], async (req, res) => {
  try {
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

router.get('/',withAuth, async (req, res) => {
  try {
    if (req.session.logged_in) {
      // get category list
      const categoryData = await Category.findAll();
      const categories = categoryData.map((category) =>
        category.get({ plain: true })
      );

      res.render('addRecipe', {
        layout: 'layout',
        categories,
        logged_in: req.session.logged_in,
      });
      return;
    }
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
