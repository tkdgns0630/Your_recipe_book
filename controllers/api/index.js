const router = require('express').Router();
const userRoutes = require('./userRoutes');
const favouriteRoutes = require('./favourites');
const addRecipeRoutes = require('./addRecipeRoutes');
const userProfileRoute = require('./profilePage');
const recipeRoute = require('./recipeRoute.js');



router.use('/users', userRoutes);
router.use('/favourites', favouriteRoutes);
router.use('/add-recipe', addRecipeRoutes);
router.use('/user-profile', userProfileRoute);
router.use('/recipes', recipeRoute);



module.exports = router;
