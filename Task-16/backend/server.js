require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const taskRoutes = require("./routes/task.routes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);

app.listen(process.env.PORT, () => {
  console.log("\n=============================================");
  console.log(`Server running at http://localhost:${process.env.PORT}`);
  console.log("=============================================\n");
});
