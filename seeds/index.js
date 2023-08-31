const seedCategories = require('./category-seeds');
const seedRecipie = require('./recipe-seeds');
const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedUserFavourites = require('./user-favourite-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USER SEEDED -----\n');
  await seedRecipie();
  console.log('\n----- RECIPIE SEEDED -----\n');
  await seedUserFavourites();
  console.log('\n----- USER FAVOURITES SEEDED -----\n');

  process.exit(0);
};

seedAll();
