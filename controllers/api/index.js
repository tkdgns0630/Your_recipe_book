const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const favouriteRoutes = require('./favourites');
const addRecipeRoutes = require('./addRecipeRoutes');
const userProfileRoute = require('./profilePage');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/favourites', favouriteRoutes);
router.use('/add-recipe', addRecipeRoutes);
router.use('/user-profile', userProfileRoute);

module.exports = router;
