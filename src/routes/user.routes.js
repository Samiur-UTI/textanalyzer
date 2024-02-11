const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const { validateSignup, validateLogin } = require('../middleware/validator.middleware');

// Signup route
router.post('/signup',validateSignup, userController.signup);

// Login route
router.post('/login',validateLogin, userController.login);

module.exports = router;
