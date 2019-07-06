const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller'); // including home controller
router.get('/', homeController.home); // Accessing home controller for '/' 
router.use('/search', require('./search')); // including router for '/search'


module.exports = router;