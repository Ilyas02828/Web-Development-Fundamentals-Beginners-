const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/task.routes");
const userRoutes = require("./routes/user.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/admin", adminRoutes);

module.exports = app;
