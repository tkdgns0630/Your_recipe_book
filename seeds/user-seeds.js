const { User } = require('../models');

const userData = [
  {
    //1
    name: 'Tom',
    email: 'tommy@example.com',
    is_admin: true,
    password: 'W0rdpass',
  },
  {
    //2
    name: 'Eve',
    email: 'eve4eva@example.com',
    is_admin: true,
    password: 'Pa55word',
  },
  {
    //3
    name: 'James T.',
    email: 'cptkirk@starfleet.com',
    is_admin: false,
    password: 'w0sspard',
  },
  {
    //4
    name: 'Duce A.',
    email: 'i<3achiovies@guppies.com',
    is_admin: false,
    password: '55apdrow',
  },
  {
    //5
    name: 'Remillia S.',
    email: 'scarletpopo@kouma.com',
    is_admin: false,
    password: 'pardwo55',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
