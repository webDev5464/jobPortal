// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { RegisterUser, LoginUser, checkAuth } = require('../controllers/user/auth');
const { authenticateUser } = require('../middleware/auth');

// Route for user registration
router.post('/register', RegisterUser);

// Route for user login
router.post('/login', LoginUser);
router.get('/check', authenticateUser, checkAuth);

module.exports = router;
