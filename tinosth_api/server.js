const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const clientRoutes = require("./routes/clientRoutes");
const businessRoutes = require("./routes/businessRoutes");
const purchaseOrderRoutes = require("./routes/purchaseOrderRoutes");

const sequelize = require("./_config/database");
const User = require("./models/userModel");

dotenv.config();

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/business", businessRoutes);
app.use("/api/purchase_order", purchaseOrderRoutes);

//Database sync

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((error) => {
    console.error("Database sync failed", error);
  });

//Server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
