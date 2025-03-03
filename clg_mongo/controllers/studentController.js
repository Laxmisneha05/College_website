// /controllers/studentController.js
const Student = require("../models/Student");

exports.createStudent = async (req, res) => {
  try {
    const { name, email, subDepartmentId } = req.body;
    const student = await Student.create({ name, email, subDepartmentId });
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
