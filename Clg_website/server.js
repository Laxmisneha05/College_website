const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");
const { Department, SubDepartment, Student } = require("./models");
dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/departments", require("./routes/departmentRoutes"));
app.use("/api/subdepartments", require("./routes/subDeptRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced!");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
