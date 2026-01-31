const { MongoClient } = require("mongodb");

module.exports = class ConnectToDB {
  #DB_URI = "mongodb://localhost:27017/mongodb-tutorials";
  #db = null;
  async #connect() {
    try {
      const client = new MongoClient(this.#DB_URI);
      const db = client.db();
      return db;
    } catch (error) {
      console.log(error.message);
    }
  }

  async Get() {
    try {
      if (this.#db) {
        console.log("DB connection is already alive")
        return this.#db;
      }
      this.#db = await this.#connect();
      console.log("Connecting to DB")
      return this.#db;
    } catch (error) {
      console.log(error.message);
    }
  }
};
