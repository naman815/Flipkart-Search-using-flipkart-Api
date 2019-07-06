const express = require('express');
const router = express.Router();

const searchController = require('../controllers/search_controller');// including search_controller

router.get('/results', searchController.results);// Accessing home controller for '/search/results' 

module.exports = router;