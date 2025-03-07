const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

connectDB();
app.use(express.json());

app.use('/api/departments', require('./routes/departmentRoutes'));
app.use('/api/subdepartments', require('./routes/subDeptRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
