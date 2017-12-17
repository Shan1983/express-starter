const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

// Do work here
router.get('/', indexController.sayHi);

module.exports = router;
