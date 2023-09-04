# Your Recipe Book
## Description

This application builds a website displaying numerous recipes, enabling users to search for recipes by series of categories. User can create recipes, add to favourites and check recipes in details including number of likes and comments by users. They can also increase like, add their comments and check latest recipes.

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Credits](#credits)
- [Tests](#tests)

## Installation

This site can be run (as of 3/9/2023) at the link https://your-recipe-book-985222554f68.herokuapp.com/.

Alternatively, it can be run on a localhost 3001 with the command 'npm start' after cloning the repository  and installing relevant dependencies.

## Usage

- As a User I am presented with a homepage that contains menu, login button and it displays all recipes names and image.
- When I click on a category, then a page is opened with all recipes fall under selected category.
- When user clicks on latest recipes I am shown a list of the most recently posted recipes.
- When I login I am redirected to my profile page. There I can see recipes I have added myself and ones I have favourited.
- On my Profile Page I can delete my own recipes and remove recipes from my favourites.
- On same Page I can add a new recipe, including the option to upload a picture of the dish 
- When I click on a recipe I am redirected to a page with said recipe’s Ingredients and method along with dietary information. -On that page, I can like, favourite and give my own feedback.


This is a proof of concept site that demonstrates a basic forum based around sharing recipes. Users can sign up and add recipes to the integral database.

The following images show the web application's appearance and functionality :
- Profile Page
![ProfilePage](/public/images/profile.jpg)

- Add Recipe
![AddRecipe](/public/images/add.jpg)

- Recipe By Id
![RecipeById](/public/images/recipe-details.jpg)

- Recipe by Category
![RecipebyCategory](/public/images/by%20cat.jpg)



## Technologies

- Express -sessions, handlebars
- Sequelize
- Multer package
- Bootstrap framework
- Eslint
- dotenv


## Credits

Collaborators

This project was made with assistance of 
- Paolo van Reyk (https://github.com/anUF0)
- Sakshi Arora (https://github.com/sakshiarora04)
- Tristen Hobba (https://github.com/Tristenh)
- Sanghun Yun (https://github.com/tkdgns0630)

References

https://www.bezkoder.com/node-js-upload-image-mysql/

https://blog.logrocket.com/multer-nodejs-express-upload-file/

https://stackoverflow.com/questions/48900061/toggle-heart-shaped-html-code-in-javascript


## Tests
Dummy data is available in the seeds file and can be run in the terminal with the command 'npm run seed', which can be used to test functionality.

