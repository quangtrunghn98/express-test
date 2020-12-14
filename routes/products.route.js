const express = require('express');

const controller = require('../controllers/products.controller');

const router = express.Router();

router.get('', controller.get);


module.exports = router;

