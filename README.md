Instructions:

This API does GET, POST, PUT

use on postman:
GET
https://recipe-app-mrts.onrender.com/api/potatoes
(all data)

GET
https://recipe-app-mrts.onrender.com/api/potatoes/47 (id 47 is the last id) options for id: 1-6, 27-47

POST
https://recipe-app-mrts.onrender.com/api/potatoes/48 (add id 48, new data)
body
{
    "type_name": "Purple Peruvian",
    "description": "A vibrant purple potato with a slightly nutty and earthy flavor.",
    "best_uses": "Roasting, Mashing, Salads",
    "starch_level": "Medium",
    "skin_color": "Deep Purple",
    "flesh_color": "Purple"
}

PUT https://recipe-app-mrts.onrender.com/api/potatoes/48 (save changes for id 48)
body
{
    "type_name": "Purple Peruvian",
    "description": "A vibrant purple potato with a slightly nutty and earthy flavor.",
    "best_uses": "Roasting, Mashing, Salads",
    "starch_level": "Medium",
    "skin_color": "Deep Purple",
    "flesh_color": "Purple"
}
