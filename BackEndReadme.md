![alt text](image-3.png)

## Backend README (API)

## Overview

This is the API for managing potato recipes. It stores and retrieves recipes from a database.

## Database

* Uses PostgreSQL (PgAdmin 4)
* Needs a `recipes` table

``` bash
REATE TABLE potato_recipes (
    recipe_id SERIAL PRIMARY KEY,
    recipe_name VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    prep_time INTEGER, -- in minutes
    cook_time INTEGER, -- in minutes
    serving_size INTEGER
);

INSERT INTO potato_recipes (recipe_name, ingredients, instructions, prep_time, cook_time, serving_size) VALUES

## example database info ##
('Classic Mashed Potatoes', 'Potatoes, Milk, Butter, Salt, Pepper', 'Boil potatoes, mash with milk and butter, season.', 15, 20, 4), ...
```

## What we need
 
 ### Get These Programs:

* Node.js: For running the API. Get it from: nodejs.org
* PostgreSQL: For the database. Get it from: postgresql.org
* Visual Studio Code (VS Code): For writing code. Get it from: code.visualstudio.com
* Postam to test back end without front end required. Get it from: postman.com
* Render: To view web service. Get if from: render.com

### In VS Code setup and installations:
* Ctrl+Shift+P -> Git: Clone -> paste project web address
### installetions
``` bash
git clone https://github.come/exampleprojext.git
cd project/example
npm install express pg dotenv
npm install cors
npm install pg
```

## How it works (testing on back end, postmand needed)
#### add your render url in postman to test the backend

## API Endpoints

* `GET /api/recipes`: Get all recipes
* `GET /api/recipes/id`: Get one recipe
* `POST /api/recipes`: Add a recipe
* `PUT /api/recipes/id`: Update a recipe
* `DELETE /api/recipes/id`: Delete a recipe

### Get all recipes (database)
![alt text](<Screenshot 2025-03-04 105121-1.png>)
### Get spesific recipe
![alt text](<Screenshot 2025-03-04 105139.png>)
### Post to add recipe
![alt text](<Screenshot 2025-03-04 105615.png>)
### Put to Save new recipe
![alt text](<Screenshot 2025-03-04 105710-2.png>)
### Delete to delete recipe
![alt text](<Screenshot 2025-03-04 105845.png>)