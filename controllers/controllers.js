const User = require('../models/models');

// CRUD operations for User management

module.exports = {
    // Retrieve all users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.error("Error fetching users:", err); // Log the error for debugging
            res.status(500).send("Error getting data of users.");
        }
    },

    // Add a new user
    addUser: async (req, res) => {
        const { name, email, age } = req.body;

        // Validate input data
        if (!name || !email || !age) {
            return res.status(400).send('Name, email, and age are required.');
        }

        try {
            const newUser = new User({ name, email, age });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (err) {
            console.error("Error adding user:", err); // Log the error for debugging
            res.status(500).send('Error adding user.');
        }
    }
};
