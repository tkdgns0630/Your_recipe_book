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

- User is presented with the home page when the application is opened. The homepage contains menu, login button and it displays all recipes name and image.
- When user click on categories, then a page is opened with all recipes fall under selected category.
- When user clicks on latest recipes, then it shows all recipes date-wise.
- After logging, user is redirected to profile page where user created recipes and favourite recipes has been displayed side by side. These recipe boxes has delete button to delete user created recipes and to remove recipes from favourites.
- when user clicks on recipe photo or name, then a page is opened to display recipe in detail. There is option to add recipes to favourite.
-User can like and add valuable comments. All comments are displayed on the same page.
- There is add recipe link on profile page, there logged in user can create recipes and upload photo.

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
- Paolo van Reyk (https://github.com/tkdgns0630)
- Sakshi Arora (https://github.com/sakshiarora04)
- Tristen Hobba (https://github.com/Tristenh)
- Sanghun Yun (https://github.com/tkdgns0630)

References

https://www.bezkoder.com/node-js-upload-image-mysql/

https://blog.logrocket.com/multer-nodejs-express-upload-file/

https://stackoverflow.com/questions/48900061/toggle-heart-shaped-html-code-in-javascript


## Tests
Dummy data is available in the seeds file and can be run in the terminal with the command 'npm run seed', which can be used to test functionality.

