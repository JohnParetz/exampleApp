const { Router }= require('express');
const controller = require('./controller');

const router = Router();

router.git('/', controller.getInventory);

module.exports = router;
