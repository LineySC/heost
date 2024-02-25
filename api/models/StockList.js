const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const StockList = sequelize.define(
  "stocklists",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

StockList.sync({ alter: true });

module.exports = StockList;
