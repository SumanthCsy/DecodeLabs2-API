/**
 * server.js
 * 
 * Entry point of the Student Management API.
 * Sets up Express, parses incoming JSON payloads, mounts student routes, 
 * handles global errors, and listens on port 3000.
 */

const express = require('express');
const studentRoutes = require('./routes/studentRoutes');

// Initialize Express application
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Welcome route for testing if the server is active
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Student Management API. Access student endpoints at /students."
  });
});

// Mount student routes under '/students' prefix
app.use('/students', studentRoutes);

// 404 handler for undefined endpoints
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found. Please check the URL and try again."
  });
});

// Global error handling middleware for handling unexpected runtime errors
app.use((err, req, res, next) => {
  console.error("Server Error Stack:", err.stack);
  res.status(500).json({
    success: false,
    message: "An internal server error occurred."
  });
});

// Start listening on port 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
