const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures that each username is unique in the database
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures that each email is unique in the database
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model for the user schema
const User = mongoose.model('User', userSchema);

module.exports = {User};
