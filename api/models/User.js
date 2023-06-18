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
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
      unique: true,
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
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

User.sync({ alter: false });

module.exports = User;
