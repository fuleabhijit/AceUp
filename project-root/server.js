require('dotenv').config(); // Load .env variables
const express = require('express');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/admin');
const studentRoutes = require('./routes/student');

const app = express();

// Middleware
app.use(express.json()); // For parsing JSON

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/student', studentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
