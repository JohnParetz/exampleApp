![alt text](image-3.png)

## Backend README (API)

## Overview

This is the API for managing potato recipes. It stores and retrieves recipes from a database.

## How to Run

1.  Clone the repository
2.  `npm install`
3.  Create `.env` with database details
4.  `npm start`

## API Endpoints

* `GET /api/recipes`: Get all recipes
* `GET /api/recipes/:id`: Get one recipe
* `POST /api/recipes`: Add a recipe
* `PUT /api/recipes/:id`: Update a recipe
* `DELETE /api/recipes/:id`: Delete a recipe
* `GET /api/search?query=...`: Search recipes

## Database

* Uses PostgreSQL
* Needs a `recipes` table

## Notes

* Used with a frontend