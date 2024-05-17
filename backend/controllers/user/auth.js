const jwt = require('jsonwebtoken');
const User = require('../../models/Usermodel');
const ErrorHandler = require('../../middleware/errorHandler');

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
        const token = jwt.sign({ userId: user._id }, 'jatinisbestcoderintheworld', { expiresIn: '1m' });

        return res.status(200)
            .cookie('token', token, { maxAge: 60000, httpOnly: true }) // Set cookie with token
            .json({ token, success: true }); // Send token in the response body

    } catch (error) {
        next(error); // Pass errors to custom error handler
    }
};

const checkAuth = (req, res, next) => {
    next(new ErrorHandler("jatin's error!", 500));
};

module.exports = { checkAuth, RegisterUser, LoginUser };
