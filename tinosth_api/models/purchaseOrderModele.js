const sequelize = require("./../_config/database");
const { DataTypes } = require("sequelize");

const PurchaseOrder = sequelize.define(
  "PurchaseOrder",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    supplier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "partially_received", "received"),
      defaultValue: "pending",
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "purchase_orders",
    timestamps: true,
  }
);

PurchaseOrder.associate = (models) => {
  PurchaseOrder.hasMany(models.PurchaseOrderLine, {
    as: "lines",
    foreignKey: "purchaseOrderId",
    onDelete: "CASCADE",
  });
};

PurchaseOrder.sync({ alter: false });

module.exports = PurchaseOrder;
