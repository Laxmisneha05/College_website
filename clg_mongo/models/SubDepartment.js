const mongoose = require("mongoose");

const subDepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true }
});

module.exports = mongoose.model("SubDepartment", subDepartmentSchema);
