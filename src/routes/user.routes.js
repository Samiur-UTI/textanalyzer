const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

// Signup route
router.post('/signup', userController.signup);

// Login route
router.post('/login', userController.login);

module.exports = router;
