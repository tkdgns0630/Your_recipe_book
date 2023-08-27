const { User } = require('../models');

const userData = [
  {
    name: 'sak',
    email: 'sak1@gmail.com',
    password:'abc123456'

  },
  {
     name: 'sakshi',
    email: 'sakshi1@gmail.com',
    password:'abc123456'
  },
  {
    name: 'saks',
    email: 'saks@gmail.com',
    password:'abc123456'
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
