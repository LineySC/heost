const express = require('express');
const router = express.Router();

const registerController = require('../controllers/auth/register.ctrl');
const loginController = require('../controllers/auth/login.ctrl');

router.post('/signup', registerController.register)
router.post('/login', loginController.login)

module.exports = router