const { SubDepartment } = require("../models");

exports.createSubDepartment = async (req, res) => {
  try {
    const { name, departmentId } = req.body;
    const subDept = await SubDepartment.create({ name, departmentId });
    res.status(201).json(subDept);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSubDepartmentsByDepartment = async (req, res) => {
  try {
    const { departmentId } = req.params;
    const subDepartments = await SubDepartment.findAll({ where: { departmentId } });
    res.status(200).json(subDepartments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
