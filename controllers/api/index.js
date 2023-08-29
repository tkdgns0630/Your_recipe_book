const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const addRecipeRoutes = require('./addRecipeRoutes');


router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/addRecipe', addRecipeRoutes);


module.exports = router;
