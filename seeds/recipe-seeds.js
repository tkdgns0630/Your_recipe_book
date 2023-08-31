const { Recipe } = require('../models');
const recipeData = [
  {
    //1
    name: 'Pasta Cabonara',
    ingredients: 'Pasta, Eggs, Panchetta, Parmesan Cheese',
    method:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Vel pretium lectus quam id leo in vitae turpis massa. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sit amet justo donec enim. Egestas purus viverra accum``san in. Integer eget aliquet nibh praesent. A iaculis at erat pellentesque adipiscing. Eget nullam non nisi est sit. Tellus in hac habitasse platea dictumst. Amet facilisis magna etiam tempor orci eu lobortis. Pharetra magna ac placerat vestibulum. Pellentesque elit eget gravida cum. Egestas congue quisque egestas diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.',
    prep_time: 15,
    date_created: '2023-01-23',
    photo: 'carbonara.jpg',
    user_id: 1,
    cat_id: 5,
    likes: 5,
    has_nuts: false,
    vegan: false,
  },
  {
    //2
    name: 'Tacos',
    ingredients: 'Taco Shells, Beef, Spicy Sauce, Tomato, Lettuce',
    method:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Vel pretium lectus quam id leo in vitae turpis massa. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sit amet justo donec enim. Egestas purus viverra accum``san in. Integer eget aliquet nibh praesent. A iaculis at erat pellentesque adipiscing. Eget nullam non nisi est sit. Tellus in hac habitasse platea dictumst. Amet facilisis magna etiam tempor orci eu lobortis. Pharetra magna ac placerat vestibulum. Pellentesque elit eget gravida cum. Egestas congue quisque egestas diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.',
    prep_time: 15,
    date_created: '2023-01-23',
    photo: 'tacos-mexican.jpg',
    user_id: 1,
    cat_id: 4,
    likes: 5,
    has_nuts: false,
    vegan: false,
  },
  {
    //3
    name: 'Hamburger',
    ingredients: 'Buns, Beef, Pickles, Tomato, Lettuce',
    method:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Vel pretium lectus quam id leo in vitae turpis massa. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sit amet justo donec enim. Egestas purus viverra accum``san in. Integer eget aliquet nibh praesent. A iaculis at erat pellentesque adipiscing. Eget nullam non nisi est sit. Tellus in hac habitasse platea dictumst. Amet facilisis magna etiam tempor orci eu lobortis. Pharetra magna ac placerat vestibulum. Pellentesque elit eget gravida cum. Egestas congue quisque egestas diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.',
    prep_time: 10,
    date_created: '2023-01-23',
    photo: 'burger-fast-food.jpg',
    user_id: 2,
    cat_id: 1,
    likes: 5,
    has_nuts: false,
    vegan: false,
  },
  {
    //4
    name: 'Fried Rice with Prawns',
    ingredients: 'Rice, Eggs, Small Prawns, Soy Sauce, Sesame Oil',
    method:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Vel pretium lectus quam id leo in vitae turpis massa. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sit amet justo donec enim. Egestas purus viverra accum``san in. Integer eget aliquet nibh praesent. A iaculis at erat pellentesque adipiscing. Eget nullam non nisi est sit. Tellus in hac habitasse platea dictumst. Amet facilisis magna etiam tempor orci eu lobortis. Pharetra magna ac placerat vestibulum. Pellentesque elit eget gravida cum. Egestas congue quisque egestas diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.',
    prep_time: 25,
    date_created: '2023-01-23',
    photo: 'fried-rice.jpg',
    user_id: 2,
    cat_id: 2,
    likes: 5,
    has_nuts: false,
    vegan: false,
  },
  {
    //5
    name: 'Lamb Curry',
    ingredients: 'Rice, Lamb Shoulder,Garam Masala,Ginger,Tomato,Onion,Garlic',
    method:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis. Vel pretium lectus quam id leo in vitae turpis massa. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sit amet justo donec enim. Egestas purus viverra accum``san in. Integer eget aliquet nibh praesent. A iaculis at erat pellentesque adipiscing. Eget nullam non nisi est sit. Tellus in hac habitasse platea dictumst. Amet facilisis magna etiam tempor orci eu lobortis. Pharetra magna ac placerat vestibulum. Pellentesque elit eget gravida cum. Egestas congue quisque egestas diam. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.',
    prep_time: 85,
    date_created: '2023-01-23',
    photo: 'curry-meat.jpg',
    user_id: 2,
    cat_id: 3,
    likes: 5,
    has_nuts: false,
    vegan: false,
  },
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;
