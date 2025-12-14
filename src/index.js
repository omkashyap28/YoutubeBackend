const express = require("express");
require("dotenv").config({
  path: ".env",
});

const app = express();
const port = process.env.PORT || 8000;

app.get("/", function (req, res) {
  res.send("HELLO BACKEND");
});

app.listen(port, function () {
  console.log("App id running on ", port);
});
