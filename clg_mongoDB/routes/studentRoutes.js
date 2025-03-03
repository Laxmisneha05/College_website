// /routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const { createStudent, getAllStudents } = require("../controllers/studentController");

// Create Student
router.post("/create", createStudent);

// Get all Students
router.get("/", getAllStudents);

module.exports = router;
