const express = require('express');
const { createDepartment, getAllDepartments } = require('../controllers/departmentController');
const router = express.Router();

router.post('/create', createDepartment);
router.get('/', getAllDepartments);

module.exports = router;
