
## Description

This is a clone of [Wild One](https://wildone.com/). Catniip is a cat supplies website that allows you to list the products you want to sell, and buy products from other people.


## Table of Contents
  - [MVP Feature List](https://github.com/wanyi886/Captone-Project-Catniip/wiki/Feature-List)
  - [Database Schema](https://github.com/wanyi886/Captone-Project-Catniip/wiki/Database-Schema )
  - [User Stories](https://github.com/wanyi886/Captone-Project-Catniip/wiki/User-Stories)
  - [WireFrame](https://github.com/wanyi886/Captone-Project-Catniip/wiki/Wireframe)

## Link to live site

Hosted on Heroku: [Catniip](https://catniip.herokuapp.com/)

## Technologies

Catniip was built using the following technologies:
<br>
<br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" style="width:75px;" />
<img src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg" style="width:75px;">
<img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" style="width:75px;">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" style="width:75px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" style="width:75px;" />

## Screenshots

### HomePage
<img src="https://github.com/wanyi886/Captone-Project-Catniip/blob/main/wiki-images/screenshots/01-Homepage-1.png" />
<img src="https://github.com/wanyi886/Captone-Project-Catniip/blob/main/wiki-images/screenshots/02-Homepage-2.png" />

### Signup
<img src="https://github.com/wanyi886/Captone-Project-Catniip/blob/main/wiki-images/screenshots/03-signup-page.png"/>

### Login
<img src="https://github.com/wanyi886/Captone-Project-Catniip/blob/main/wiki-images/screenshots/04-login.png"/>

### Products Page
<img src="https://github.com/wanyi886/Captone-Project-Catniip/blob/main/wiki-images/screenshots/05-products-page.png" />

### Product Detail
<img src="https://github.com/wanyi886/Captone-Project-Catniip/blob/main/wiki-images/screenshots/06-product-detail-page.png" />

### Shopping Cart
<img src="https://github.com/wanyi886/Captone-Project-Catniip/blob/main/wiki-images/screenshots/07-shopping-cart.png" />

### My Orders
<img src="https://github.com/wanyi886/Captone-Project-Catniip/blob/main/wiki-images/screenshots/09-orders-page.png" />

### My Listings
<img src="https://github.com/wanyi886/Captone-Project-Catniip/blob/main/wiki-images/screenshots/10-mylistings.png"/>

## Getting started

1. Clone this repo.
-- `gh repo clone wanyi886/Captone-Project-Catniip`

2. Install dependencies from the root directory.
-- `npm install`

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
-- `CREATE USER <name> WITH CREATEDB PASSWORD <'password'>`

4. Create a .env file in the backend directory based on the .env.example found within the respectice directory.
5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000).
6.  Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.
--`"proxy": "http://localhost:5000"`
7. Create Database, Migrate, and Seed models.
--`npx dotenv sequelize db:create`
--`npx dotenv sequelize db:migrate`
--`npx dotenv sequelize db:seed:all`
8. Start the serveices in the backend directory.
--`npm start`
9. Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to http://localhost:3000.
--`npm start`
10. You can use the Demo user or create an account to begin using eventLight.



## Features

### Logged out users can:
- View all products
- Add items to shopping cart

### Logged in users can:
- View all products
- Add items to shopping cart
- Adjust quantity of items in the shopping cart
- List(Create) product which users want to sell
- View products listed by users
- Update and Delete products listed by users
- Place orders/ View orders history/ Cancel orders
