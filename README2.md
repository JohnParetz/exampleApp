Instructions:

This API does GET, POST, PUT, DELETE

use on postman:
GET
https://recipe-app-mrts.onrender.com/api/recipes 
(all data)

GET
https://recipe-app-mrts.onrender.com/api/recipes
(id up to 50)

POST
https://recipe-app-mrts.onrender.com/api/recipes
(add id 51, new data)

body
{
    "recipe_name": "Simple Toast",
    "ingredients": "Bread, Butter",
    "instructions": "Toast bread. Spread butter."
}

PUT 
https://recipe-app-mrts.onrender.com/api/recipes/51
(save changes for id 51)

body
{
    "recipe_name": "Simple Toast",
    "ingredients": "Bread, Butter",
    "instructions": "Toast bread. Spread butter."
}

DELETE
https://recipe-app-mrts.onrender.com/api/recipes/51
(delete id 51)

body
{
    "recipe_name": "Simple Toast",
    "ingredients": "Bread, Butter",
    "instructions": "Toast bread. Spread butter."
}
