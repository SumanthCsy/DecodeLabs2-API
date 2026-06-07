/**
 * controllers/studentController.js
 * 
 * Controller containing handler functions for student endpoints.
 * Interacts with the in-memory database at data/students.js to retrieve or insert records.
 */

const students = require('../data/students');

/**
 * @desc    Get all students
 * @route   GET /students
 * @access  Public
 */
exports.getAllStudents = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      count: students.length,
      students: students
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while retrieving students."
    });
  }
};

/**
 * @desc    Get student by ID
 * @route   GET /students/:id
 * @access  Public
 */
exports.getStudentById = (req, res) => {
  try {
    const studentId = parseInt(req.params.id, 10);
    
    // Validate if the parsed ID is a valid number
    if (isNaN(studentId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Student ID format. Must be an integer."
      });
    }

    const student = students.find(s => s.id === studentId);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: `Student with ID ${studentId} not found`
      });
    }

    return res.status(200).json({
      success: true,
      student: student
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while retrieving the student."
    });
  }
};

/**
 * @desc    Create a new student
 * @route   POST /students
 * @access  Public
 */
exports.createStudent = (req, res) => {
  try {
    const { name, course, email, age, grade, status, enrollmentDate } = req.body;

    // Generate a unique ID (max existing ID + 1, or 1 if empty)
    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;

    // Create the new student object with defaults for detailed fields if not provided
    const newStudent = {
      id: newId,
      name: name,
      course: course,
      email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
      age: age ? parseInt(age, 10) : 21,
      grade: grade || "A",
      status: status || "Active",
      enrollmentDate: enrollmentDate || new Date().toISOString().split('T')[0]
    };

    // Save the new student to the in-memory array
    students.push(newStudent);

    // Return 201 Created status with the required success payload
    return res.status(201).json({
      success: true,
      message: "Student Added Successfully",
      student: newStudent
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while adding the student."
    });
  }
};
