/**
 * data/students.js
 * 
 * In-memory data store containing initial student profiles.
 * This simulates a database for the application and holds enriched student details.
 */

const students = [
  {
    id: 1,
    name: "Sumanth Csy",
    course: "Full Stack Development",
    email: "sumanth.csy@example.com",
    age: 22,
    grade: "A+",
    status: "Active",
    enrollmentDate: "2026-01-15"
  },
  {
    id: 2,
    name: "Naveen ",
    course: "Web Development",
    email: "naveen@example.com",
    age: 21,
    grade: "A",
    status: "Active",
    enrollmentDate: "2026-02-10"
  },
  {
    id: 3,
    name: "Sravan",
    course: "Data Science & AI",
    email: "sravan@example.com",
    age: 23,
    grade: "B+",
    status: "Active",
    enrollmentDate: "2025-11-05"
  },
  {
    id: 4,
    name: "Yeshwanth",
    course: "UI/UX Design",
    email: "yeshwanth@example.com",
    age: 20,
    grade: "A",
    status: "Inactive",
    enrollmentDate: "2026-03-01"
  }
];

module.exports = students;
