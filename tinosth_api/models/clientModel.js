const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../_config/database");
const Business = require("./businessModel");

const Client = sequelize.define(
  "client",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    siret: {
      type: DataTypes.BIGINT,
    },
    tva_intra: {
      type: DataTypes.STRING,
    },
    client_name: {
      type: DataTypes.STRING,
      primaryKey: true,
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
    client_invoice_address: {
      type: DataTypes.STRING,
    },
    client_invoice_postal: {
      type: DataTypes.STRING,
    },
    client_invoice_city: {
      type: DataTypes.STRING,
    },
    client_invoice_region: {
      type: DataTypes.STRING,
    },
    client_delivery_address: {
      type: DataTypes.STRING,
    },
    client_delivery_postal: {
      type: DataTypes.STRING,
    },
    client_delivery_city: {
      type: DataTypes.STRING,
    },
    client_delivery_region: {
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

Client.sync({ alter: false });

module.exports = Client;
