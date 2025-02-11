const { Router } = require('express');
const controller = require('./inventory/controller');

const router = Router();

router.get('/', controller.getInventory);

module.exports = router;