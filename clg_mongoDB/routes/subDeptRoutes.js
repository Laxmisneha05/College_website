const express = require("express");
const { createSubDepartment, getSubDepartmentsByDepartment } = require("../controllers/subDeptController");
const router = express.Router();

// Create SubDepartment
router.post("/create", createSubDepartment);

// Get SubDepartments by Department ID
router.get("/:departmentId", getSubDepartmentsByDepartment);

module.exports = router;
