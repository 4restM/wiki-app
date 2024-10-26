const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//MW
app.use(express.json());

//Routes
const searchRoutes = require("./routes/searchRoutes");
const historyRoutes = require("./routes/historyRoutes");

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${PORT}`);
});
