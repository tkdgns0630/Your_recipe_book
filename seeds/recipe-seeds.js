const { User } = require('../models');

const userData = [
    {//1
    name: 'Pasta Cabonara',
    ingredients: ['Pasta', 'Eggs', 'Panchetta', 'Parmesan Cheese'],
    method: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Vel pretium lectus quam id leo in vitae turpis massa. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sit amet justo donec enim. Egestas purus viverra accum``san in. Integer eget aliquet nibh praesent. A iaculis at erat pellentesque adipiscing. Eget nullam non nisi est sit. Tellus in hac habitasse platea dictumst. Amet facilisis magna etiam tempor orci eu lobortis. Pharetra magna ac placerat vestibulum. Pellentesque elit eget gravida cum. Egestas congue quisque egestas diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.'],
    prepTime: 15,
    dateCreated: '2023-01-23',
    cat_id: 5
    },
    {//2
    name: 'Tacos',
    ingredients: ['Taco Shells', 'Beef', 'Spicy Sauce', 'Tomato', 'Lettuce'],
    method: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Vel pretium lectus quam id leo in vitae turpis massa. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sit amet justo donec enim. Egestas purus viverra accum``san in. Integer eget aliquet nibh praesent. A iaculis at erat pellentesque adipiscing. Eget nullam non nisi est sit. Tellus in hac habitasse platea dictumst. Amet facilisis magna etiam tempor orci eu lobortis. Pharetra magna ac placerat vestibulum. Pellentesque elit eget gravida cum. Egestas congue quisque egestas diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.'],
    prepTime: 15,
    dateCreated: '2023-01-23',
    cat_id: 4
    },
    {//3
    name: 'Hamburger',
    ingredients: ['Buns', 'Beef', 'Pickles', 'Tomato', 'Lettuce'],
    method: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Vel pretium lectus quam id leo in vitae turpis massa. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sit amet justo donec enim. Egestas purus viverra accum``san in. Integer eget aliquet nibh praesent. A iaculis at erat pellentesque adipiscing. Eget nullam non nisi est sit. Tellus in hac habitasse platea dictumst. Amet facilisis magna etiam tempor orci eu lobortis. Pharetra magna ac placerat vestibulum. Pellentesque elit eget gravida cum. Egestas congue quisque egestas diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.'],
    prepTime: 10,
    dateCreated: '2023-01-23',
    cat_id: 1
    },
    {//4
        name: 'Fried Rice with Prawns',
        ingredients: ['Rice', 'Eggs', 'Small Prawns', 'Soy Sauce', 'Sesame Oil'],
        method: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Vel pretium lectus quam id leo in vitae turpis massa. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sit amet justo donec enim. Egestas purus viverra accum``san in. Integer eget aliquet nibh praesent. A iaculis at erat pellentesque adipiscing. Eget nullam non nisi est sit. Tellus in hac habitasse platea dictumst. Amet facilisis magna etiam tempor orci eu lobortis. Pharetra magna ac placerat vestibulum. Pellentesque elit eget gravida cum. Egestas congue quisque egestas diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.'],
        prepTime: 25,
        dateCreated: '2023-01-23',
        cat_id: 2
        },
    {//5
        name: 'Fried Rice with Prawns',
        ingredients: ['Rice', 'Lamb Shoulder', 'Garam Masala', 'Ginger', 'Tomato','Onion','Garlic'],
        method: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Vel pretium lectus quam id leo in vitae turpis massa. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sit amet justo donec enim. Egestas purus viverra accum``san in. Integer eget aliquet nibh praesent. A iaculis at erat pellentesque adipiscing. Eget nullam non nisi est sit. Tellus in hac habitasse platea dictumst. Amet facilisis magna etiam tempor orci eu lobortis. Pharetra magna ac placerat vestibulum. Pellentesque elit eget gravida cum. Egestas congue quisque egestas diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.'],
        prepTime: 85,
        dateCreated: '2023-01-23',
        cat_id: 2
        },
];

const seedUsers = () => User.bulkcreate(userData);

module.exports = seedUsers;