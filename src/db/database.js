const { default: mongoose } = require("mongoose");

class Database {
  async connectDB(uri) {
    try {
      const databaseResponse = await mongoose.connect(`${uri}/${process.env.APP_NAME || youtube}`);
      if (databaseResponse) {
        return databaseResponse;
      }
    } catch (error) {
      console.log("ERROR IN DATABASE CONNECTION: ", error);
    }
  }
}

module.exports = new Database();
