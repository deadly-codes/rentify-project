// routes/propertyRoutes.js

const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

// Route to fetch properties
router.get('/', propertyController.getProperties);

// Route to create a new property
router.post('/', propertyController.createProperty);

module.exports = router;
