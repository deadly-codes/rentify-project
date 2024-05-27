// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to fetch users
router.get('/', userController.getUsers);

// Route to create a new user
router.post('/', userController.createUser);

module.exports = router;
