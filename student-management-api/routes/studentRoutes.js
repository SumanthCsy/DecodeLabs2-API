/**
 * routes/studentRoutes.js
 * 
 * Express Router setup mapping API endpoints to controllers and validation middleware.
 */

const express = require('express');
const router = express.Router();

// Import the student controller
const studentController = require('../controllers/studentController');

// Import the validation middleware
const validateStudent = require('../middleware/validation');

// Map API routes to controller actions
// Base path is prefixed with '/students' in server.js

// Route: GET /students - Returns list of all students
// Route: POST /students - Validates payload and adds a new student
router.route('/')
  .get(studentController.getAllStudents)
  .post(validateStudent, studentController.createStudent);

// Route: GET /students/:id - Returns details of a specific student by ID
router.route('/:id')
  .get(studentController.getStudentById);

module.exports = router;
