const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, // Ensure name is required
        trim: true      // Trim whitespace from the name
    },
    email: { 
        type: String, 
        required: true, // Ensure email is required
        unique: true,   // Ensure email is unique
        lowercase: true, // Convert email to lowercase
        trim: true      // Trim whitespace from the email
    },
    age: { 
        type: Number,
        min: 0          // Ensure age is a non-negative number
    }
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Export the User model
module.exports = mongoose.model('UserData', userSchema);
