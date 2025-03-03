const Department = require("./Department");
const SubDepartment = require("./SubDepartment");
const Student = require("./Student");

// Associations
Department.hasMany(SubDepartment, { foreignKey: "departmentId" });
SubDepartment.belongsTo(Department, { foreignKey: "departmentId" });

SubDepartment.hasMany(Student, { foreignKey: "subDepartmentId" });
Student.belongsTo(SubDepartment, { foreignKey: "subDepartmentId" });

module.exports = { Department, SubDepartment, Student };
