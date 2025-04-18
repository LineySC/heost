const { Sequelize, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../_config/database");
const Client = require("./clientModel");

const Business = sequelize.define(
  "business",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    applicant: {
      type: DataTypes.STRING,
    },
    date_of_demand: {
      type: DataTypes.DATE,
    },
    client_id: {
      type: Sequelize.UUID,
    },
    client_name: {
      type: DataTypes.STRING,
    },
    designation: {
      type: DataTypes.STRING,
    },
    nbHours: {
      type: DataTypes.INTEGER,
    },
    prix: {
      type: DataTypes.INTEGER,
    },
    delay: {
      type: DataTypes.DATE,
    },
    comment: {
      type: DataTypes.TEXT,
    },
    advancement: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    in_progress: {
      type: DataTypes.INTEGER,
    },
    finish_date: {
      type: DataTypes.DATE,
    },
    deliver_date: {
      type: DataTypes.DATE,
    },
    invoice_number: {
      type: DataTypes.STRING,
    },
    invoice_date: {
      type: DataTypes.DATE,
    },
    due_date: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Business.sync({ alter: true });

module.exports = Business;
