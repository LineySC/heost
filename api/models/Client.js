const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Client = sequelize.define(
  "client",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    client_name: {
      type: DataTypes.STRING,
      unique: true,
    },
    client_contact_name: {
      type: DataTypes.STRING,
    },
    client_contact_mail: {
      type: DataTypes.STRING,
    },
    client_contact_number: {
      type: DataTypes.STRING,
    },
    client_total_business: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    last_business: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

Client.sync({ alter: true });

module.exports = Client;
