const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models"); // Import sequelize instance from models/index.js

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: `${process.env.FRONTEND_URL}`, // Replace with your frontend URL in production if needed
  })
);

// Routes
const searchRoutes = require("./routes/searchRoutes");
const historyRoutes = require("./routes/historyRoutes");

app.use("/api", searchRoutes);
app.use("/api", historyRoutes);

// Sync database on start
sequelize
  .sync({ alter: true })
  .then(() => console.log("Database connected and synchronized"))
  .catch((err) => console.log("Database connection error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
