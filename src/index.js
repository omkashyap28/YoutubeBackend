const database = require("./db/database");
require("dotenv").config({
  path: ".env",
});

database.connectDB(process.env.MONGODB_URI).then((res) => {
  if (res) {
    console.log(res);
    const express = require("express");
    const app = express();
    const port = process.env.PORT || 8000;

    app.get("/", function (req, res) {
      res.send("HELLO BACKEND");
    });

    app.listen(port, function () {
      console.log("App id running on ", port);
    });
  }
});
