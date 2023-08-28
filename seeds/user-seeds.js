const { User } = require('../models');

const userData = [
    {//1
    name: 'Tom',
    email: 'tommy@example.com',
   // isAdmin: true,
    password: 'W0rdpass'
    },
    {//2
        name: 'Eve',
        email: 'eve4eva@example.com',
    //    isAdmin: true,
        password: 'Pa55word'
        },
    {//3
        name: 'James T.',
        email: 'cptkirk@starfleet.com',
    //    isAdmin: false,
        password: 'w0sspard'
        },
    {//4
        name: 'Duce A.',
        email: 'i<3achiovies@guppies.com',
    //    isAdmin: false,
        password: '55apdrow'
        },
    {//5
        name: 'Remillia S.',
        email: 'scarletpopo@kouma.com',
    //    isAdmin: false,
        password: 'pardwo55'
        },
];

const seedUsers = () => User.bulkcreate(userData);

module.exports = seedUsers;