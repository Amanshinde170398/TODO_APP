const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./config/mongoose");
const Todo = require("./models/todo");

// middleware functions
app.use(express.urlencoded());
app.use("/", require("./routes"));
app.use(express.static("assets"));

// view setting
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in starting the server please try after sometime!");
  }

  console.log(`Server is up and running on port ${PORT}`);
});
