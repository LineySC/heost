const sequelize = require("./../_config/database");
const { DataTypes } = require("sequelize");

const PurchaseOrderLine = sequelize.define(
  "PurchaseOrderLine",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    purchaseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantityOrdered: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantityReceived: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM("pending", "received"),
      defaultValue: "pending",
    },
  },
  {
    tableName: "purchase_order_lines",
    timestamps: true,
  }
);

PurchaseOrderLine.associate = (models) => {
  PurchaseOrderLine.belongsTo(models.PurchaseOrder, {
    foreignKey: "purchaseOrderId",
    as: "purchaseOrder",
  });
};

PurchaseOrderLine.sync({ alter: false });

module.exports = PurchaseOrderLine;
