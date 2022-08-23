require("./db");
const express = require("express");
require("dotenv/config");
const app = express();
const task = require("./routes/task");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
mongoose
  .connect(process.env.URL)
  .then(() => {
    app.use("/api/v1/task", task);
    app.listen(process.env.PORT, () => {
      console.log("Yoo ! i am listing on " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
