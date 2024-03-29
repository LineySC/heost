const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const db = require("./config/db");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

/* function to check connection */
async function syncDB() {
  try {
    await db.sync();
    console.log("Sync successfully");
  } catch (error) {
    console.log("Sync Failed" + error);
  }
}
syncDB();

/* Route */

app.use("/api/auth/", require("./routes/auth.route"));

app.use("/api/client/", require("./routes/client.route"));

app.use("/api/business/", require("./routes/business.route"));

app.use("/api/employee/", require("./routes/employee.route"));

app.use("/api/stock/", require("./routes/stock.route"));

module.exports = app;
