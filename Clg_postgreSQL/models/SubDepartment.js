const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const SubDepartment = sequelize.define("SubDepartment", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false }
});

module.exports = SubDepartment;
