// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { RegisterUser, LoginUser, checkAuth, forgotPassword, verifyOtpAndResetPassword, changePassword } = require('../controllers/user/auth');
const { authenticateUser } = require('../middleware/auth');

// Route for user registration
router.post('/register', RegisterUser);
// Route for user login
router.post('/login', LoginUser);
router.get('/auth', authenticateUser, checkAuth);
router.post('/change-password', authenticateUser, changePassword);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', verifyOtpAndResetPassword);
module.exports = router;
