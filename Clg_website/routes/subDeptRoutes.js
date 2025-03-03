const express = require("express");
const { createSubDepartment, getSubDepartmentsByDepartment } = require("../controllers/subDeptController");
const router = express.Router();

// Create SubDepartment
router.post("/create", createSubDepartment);

// Get SubDepartments of a specific Department
router.get("/:departmentId", getSubDepartmentsByDepartment);

module.exports = router;
