// Import Express
const express = require('express');
const mongoose = require('mongoose'); // Moved mongoose import to the top for consistency
const userRoutes = require('./routes/routes'); // Renamed to follow camelCase convention

// Initialize the Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); // This allows Express to parse JSON request bodies

// Define a port
const PORT = process.env.PORT || 3000; // Use environment variable for port

// MongoDB connection URI (consider using environment variables for sensitive data)
const uri = "mongodb+srv://mail2kodees:12345@cluster1.hyble.mongodb.net/";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB Successfully!");
    })
    .catch(err => {
        console.error("Could not connect to MongoDB:", err);
    });

// Create a basic route
app.get('/', (req, res) => {
    res.send('Hello, This is your Backend Server!');
});

// Use user routes
app.use('/api', userRoutes); // Prefixing with /api for better API organization

//app.get('/',(req,res)=>
//res.send("Welcome To Malaysia") )

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
