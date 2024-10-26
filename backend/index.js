const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const { sequelize } = require("./models");
const cors = require("cors");

app.use(
  cors({
    origin: `${process.env.FRONTEND_URL}`, // Replace with your frontend URL in production if different
  })
);

//MW
app.use(express.json());

//Routes
const searchRoutes = require("./routes/searchRoutes");
const historyRoutes = require("./routes/historyRoutes");

app.use("/api", searchRoutes);
app.use("/api", historyRoutes);

//sync db on start
sequelize
  .authenticate()
  .then(() => console.log("database connected"))
  .catch((err) => console.log("error: " + err));

sequelize.sync({ alter: true });

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${PORT}`);
});
