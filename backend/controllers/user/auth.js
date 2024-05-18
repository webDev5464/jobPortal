const jwt = require('jsonwebtoken');
const User = require('../../models/Usermodel');
const ErrorHandler = require('../../middleware/errorHandler');
const sendMail = require('../../configs/nodeMailer');
const otpGenerator = require('otp-generator');

const validateFields = (fields) => {
    for (const [key, value] of Object.entries(fields)) {
        if (!value) {
            throw new ErrorHandler(`Field ${key} is required`, 400);
        }
    }
};

const RegisterUser = async (req, res, next) => {
    try {
        const { fullName, email, password, phoneNumber } = req.body;

        // Validate the incoming data
        validateFields({ fullName, email, password, phoneNumber });

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new ErrorHandler('Invalid email address', 400);
        }

        // Validate phone number format
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            throw new ErrorHandler('Invalid phone number', 400);
        }

        // Check if user already exists with the provided email or phone number
        const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }] });
        if (existingUser) {
            throw new ErrorHandler('User already exists', 409);
        }

        // Create a new user instance
        const newUser = new User({
            fullName,
            email,
            password,
            phoneNumber
        });

        // Save the user to the database
        await newUser.save();

        return res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        next(error); // Pass errors to custom error handler
    }
};

const LoginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate the incoming data
        validateFields({ email, password });

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            throw new ErrorHandler('User not found', 404);
        }

        // Compare passwords
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            throw new ErrorHandler('Invalid password', 401);
        }

        // Generate JWT token for authentication
        const token = jwt.sign({ userId: user._id }, 'jatinisbestcoderintheworld', { expiresIn: '1h' });

        return res.status(200)
            .cookie('token', token, { maxAge: 60000, httpOnly: true }) // Set cookie with token
            .json({ token, success: true }); // Send token in the response body

    } catch (error) {
        next(error); // Pass errors to custom error handler
    }
};



const otpStore = new Map();

const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;

        // Validate email
        if (!email) {
            throw new ErrorHandler('Email is required', 400);
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            throw new ErrorHandler('User not found', 404);
        }

        // Generate OTP
        const otp = otpGenerator.generate(6, { digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });

        // Store OTP temporarily (in a real application, consider using a database with expiry)
        otpStore.set(email, otp);
        setTimeout(() => otpStore.delete(email), 10 * 60 * 1000); // OTP valid for 10 minutes

        // Send OTP to user's email
        await sendMail(email, 'Password Reset OTP', `Your OTP is: ${otp}`);

        res.status(200).json({ success: true, message: 'OTP sent to email' });
    } catch (error) {
        next(error);
    }
};

const verifyOtpAndResetPassword = async (req, res, next) => {
    try {
        const { email, otp, newPassword } = req.body;

        // Validate inputs
        if (!email || !otp || !newPassword) {
            throw new ErrorHandler('Email, OTP, and new password are required', 400);
        }

        // Check if OTP is valid
        const storedOtp = otpStore.get(email);
        if (!storedOtp || storedOtp !== otp) {
            throw new ErrorHandler('Invalid or expired OTP', 400);
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            throw new ErrorHandler('User not found', 404);
        }

        // Hash new password and update user record
        user.password = newPassword;
        await user.save();

        // Remove OTP from store
        otpStore.delete(email);

        res.status(200).json({ success: true, message: 'Password reset successfully' });
    } catch (error) {
        next(error);
    }
};

const changePassword = async (req, res, next) => {
    try {
        const { currentPassword, newPassword } = req.body;

        // Validate inputs
        if (!currentPassword || !newPassword) {
            throw new ErrorHandler('Current password and new password are required', 400);
        }

        // Get the user from the request (assumes user is authenticated and user object is attached to the request)
        const user = req.user;

        // Compare current password with the stored password
        const isPasswordValid = await user.comparePassword(currentPassword);
        if (!isPasswordValid) {
            throw new ErrorHandler('Current password is incorrect', 401);
        }

        // Set new password
        user.password = newPassword;

        // Save the updated user object
        await user.save();

        res.status(200).json({ success: true, message: 'Password changed successfully' });
    } catch (error) {
        next(error);
    }
};

const checkAuth = (req, res, next) => {
    console.log(req.user);
    res.send(req.user)
};

module.exports = { checkAuth, RegisterUser, changePassword, LoginUser, forgotPassword, verifyOtpAndResetPassword };