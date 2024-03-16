// db.js

const mongoose = require('mongoose');
const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // Adjust timeout value as needed
    socketTimeoutMS: 45000, // Adjust timeout value as needed
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
