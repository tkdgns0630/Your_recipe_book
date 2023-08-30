const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const favouriteRoutes = require('./favourites');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/favourites', favouriteRoutes);

module.exports = router;
