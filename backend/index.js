const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const { sequelize } = require("./models");
//MW
app.use(express.json());

//Routes
const searchRoutes = require("./routes/searchRoutes");
const historyRoutes = require("./routes/historyRoutes");

//sync db on start
sequelize
  .authenticate()
  .then(() => console.log("database connected"))
  .catch((err) => console.log("error: " + err));

sequelize.sync({ alter: true });

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${PORT}`);
});
