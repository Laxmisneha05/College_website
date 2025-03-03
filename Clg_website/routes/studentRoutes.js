const express = require("express");
const { createStudent, getAllStudents } = require("../controllers/studentController");
const router = express.Router();

// Create Student
router.post("/create", createStudent);

// Get All Students
router.get("/", getAllStudents);

module.exports = router;
