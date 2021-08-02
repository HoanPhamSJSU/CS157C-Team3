const express = require('express'); 
const {
    signupController,
    signinController,
    currentUser
} = require('../controllers/authController');
const { validate } = require('../validators')
const { rules: registrationRules } = require('../validators/auth/register')
const { rules: loginRules } = require('../validators/auth/login')


const { auth } = require('../middleware/auth')
const router = express.Router();
module.exports = router; 