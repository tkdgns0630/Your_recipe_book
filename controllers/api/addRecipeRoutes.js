const router = require('express').Router();
const { Recipe,User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const userData = await Recipe.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log(userData)
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  try {
    const recipeData = await Recipe.findAll({    
    })
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    console.log(recipes)
    res.render('addRecipe', { recipes,
      logged_in: req.session.logged_in  });
  } catch (error) {
    res.status(500).json(err);
  }
  
});


module.exports = router;
