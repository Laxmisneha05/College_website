const express = require("express");
const { createDepartment, getAllDepartments } = require("../controllers/departmentController");
const router = express.Router();

// Create Department
router.post("/create", createDepartment);

// Get All Departments
router.get("/", getAllDepartments);

module.exports = router;
