const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/potatoes', controller.getAllPotatoes);
router.get('/potatoes/:id', controller.getPotatoById);
router.post('/potatoes', controller.createPotato);
router.put('/potatoes/:id', controller.updatePotato);
router.delete('/potatoes/:id', controller.deletePotato);

module.exports = router;