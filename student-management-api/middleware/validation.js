/**
 * middleware/validation.js
 * 
 * Middleware function to validate the incoming student payload.
 * Ensures that 'name' and 'course' are present and not empty.
 * Returns a 400 Bad Request error if validation fails.
 */

const validateStudent = (req, res, next) => {
  const { name, course } = req.body;

  // Validate that name and course exist, are strings, and are not empty
  if (
    !name || 
    !course || 
    typeof name !== 'string' || 
    typeof course !== 'string' || 
    name.trim() === '' || 
    course.trim() === ''
  ) {
    return res.status(400).json({
      success: false,
      message: "Name and Course are required"
    });
  }

  // If validation passes, trim fields and proceed to the next middleware/handler
  req.body.name = name.trim();
  req.body.course = course.trim();
  
  next();
};

module.exports = validateStudent;
