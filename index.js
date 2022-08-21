require("./db");
const express = require("express");
require("dotenv/config");
const app = express();
const task = require("./routes/task");
//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
app.use("/api/v1/task", task);
app.listen(process.env.PORT, () => {
  console.log("Yoo ! i am listing on " + process.env.PORT);
});
