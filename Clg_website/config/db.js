const { Sequelize } = require("sequelize");
require("dotenv").config();

// PostgreSQL Connection using Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  logging: false, 
});

module.exports = sequelize;
