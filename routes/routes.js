const express = require('express');
const userController = require('../controllers/controllers');

const router = express.Router();

// Route to get all users
router.get('/users', userController.getAllUsers);

// Route to add a new user
router.post('/users', userController.addUser);

module.exports = router;


//http://localhost:3000/api/users