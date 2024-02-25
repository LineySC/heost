const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
      unique: true,
    },
    jobMail: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    lastSeen: {
      type: DataTypes.DATE,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 1,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

User.sync({ alter: false });

module.exports = User;
