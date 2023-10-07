const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/userModels');
require("dotenv").config();

class UserController {
    static async registerUser(req, res) {
        const { username, email, password } = req.body;

        try {
            // Check if the username or email is already registered
            const existingUser = await User.findOne({ $or: [{ username }, { email }] });
            if (existingUser) {
                return res.status(400).json({ error: 'Username or email is already registered' });
            }

            // Hash the password before storing it
            const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds (cost factor)

            // Create a new user instance with the hashed password
            const newUser = new User({ username, email, password: hashedPassword });

            // Save the new user to the database
            await newUser.save();

            // Return a success message
            return res.status(201).json({ message: 'Registration successful' });
        } catch (error) {
            // Handle database errors or other registration failures
            console.error(error);
            return res.status(500).json({ error: 'Registration failed' });
        }
    }

    static async loginUser(req, res) {
        const { email, password } = req.body;

        try {
            // Check if the username exists
            const user = await User.findOne({email});
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Verify the password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Generate a JWT token
            const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, {
                expiresIn: '1h', // Token expires in 1 hour
            });

            // Return the token as a response
            return res.status(200).json({ "msg": "Login successfull", token });
        } catch (error) {
            // Handle database errors or other login failures
            console.error(error);
            return res.status(500).json({ error: 'Login failed' });
        }


    }

    static async getUserDetails(req, res) {
        const userId = req.user.userId; // Assuming req.user contains the authenticated user's ID

        try {
            // Find the user by ID in the database
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Return user details
            return res.status(200).json(user);
        } catch (error) {
            // Handle database errors or other failures
            console.error(error);
            return res.status(500).json({ error: 'Failed to fetch user details' });
        }
    }

    static async getAllUsers(req, res) {
        try {
            // Find all users in the database
            const users = await User.find();

            if (!users || users.length === 0) {
                return res.status(404).json({ error: 'No users found' });
            }

            // Return all user details
            return res.status(200).json(users);
        } catch (error) {
            // Handle database errors or other failures
            console.error(error);
            return res.status(500).json({ error: 'Failed to fetch user details' });
        }
    }



}






module.exports = { UserController };


