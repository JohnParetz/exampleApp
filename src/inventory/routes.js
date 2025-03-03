
const express = require('express');
const router = express.Router();
const controller = require('./controller');



router.get('/', (req, res) => {  // This is the important part!
    res.send('Hello from the root path!'); 
});
router.get('api/v1/potatoes', controller.getAllPotatoes);
router.get('api/v1/potatoes/:id', controller.getPotatoById);
router.post('api/v1/potatoes', controller.createPotato);
router.put('api/v1/potatoes/:id', controller.updatePotato);
router.delete('api/v1/potatoes/:id', controller.deletePotato);

module.exports = router;