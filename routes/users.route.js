const express = require('express');

const controller = require('../controllers/users.controllers');
const validate = require('../validate/user.validate');

const router = express.Router();

router.get('', controller.index);
  
router.get('/search', controller.search);

router.get('/create', controller.creat);

router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;
