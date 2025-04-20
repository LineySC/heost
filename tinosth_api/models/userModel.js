const { DataTypes, sequelize } = require("sequelize");
const Sequelize = require("./../_config/database");

const User = Sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "salarie",
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tokenExpiration: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

User.sync({ alter: false });

module.exports = User;
