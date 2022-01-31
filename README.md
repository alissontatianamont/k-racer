Introduction to the website
This project is built on top of the React library for users who want to purchase motorcycle products. (https://es.reactjs.org/).

characteristics
This project has as its main agenda an e-commerce of motorcycle articles, starting with a menu where the categories of available products are displayed.

functions used
useEffect, useState, useParams, link.

Installation, Execution
To run the program you must...

npm i or npm installation
With npm i or npm install you will be able to install all the necessary dependencies for the application to work.

npm start
With npm start, you can start the application, in general, it will open itself after a few minutes, if not, by entering [http://localhost:3000], you will see the result.

Ctrl + C
With control + C, you can end the execution of the program.

What programming languages ​​did I use to do this?
The programming languages ​​I used were:

html
css
javascript
react js
Node JS (For server execution)
The database used is:

fire base
.env
Add an .env with the Firebase data for the app to work.



Application Paths
/ -> ItemListContainer -> is the main router.
/category/: categoryId -> ItemListContainer -> is the router for specific product categories.
/item/: paramId -> ItemDetailContainer -> is the item detail router.
/cart -> CartContainer -> is the shopping cart router.
/checkout -> CheckoutContainer -> is the checkout router.
/dashboard -> DashboardContainer -> is the dashboard router.
What data does an item have when adding it to the cart?
The data they have when you add it to the cart, is an object of {item, count};

Item -> is the product object that was added to the cart.
Count -> is the number of products that were added to the cart.
What data do you have when you generate an order?
The data that an order has are:

buyer -> is an object with the data of the user who placed the order.
items -> is an object of {item, count};
total -> the total price purchased.
How does the project work?
ElementListContainer
The ItemListContainer contains a list of all products found in the product.

ItemDetailContainer
The ItemDetailContainer contains the details of a specific product, which is received by ID via React Router's useParams.

CartViewContainer
The cartViewContainer contains a list of all the products that are in the shopping cart that the user chose.

BoxContainer
The checkoutContainer contains a form with restrictions to register the user's data and thus add it to the database.

BoardContainer
The DashboardContainer contains a list of all the products the user purchased through their email.