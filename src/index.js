require("dotenv").config({
  path: ".env",
});
const app = require("./app");
const database = require("./db/database");

const port = process.env.PORT || 8000;

database.connectDB(process.env.MONGODB_URI).then((res) => {
  if (res) {
    app.listen(port, function () {
      console.log("App is running on ", port);
    });
  }
});
