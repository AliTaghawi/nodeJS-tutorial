const { MongoClient } = require("mongodb");

class connectToMongoDB {
  #DB_URI = "mongodb://localhost:27017/mongodb-tutorial";
  #db = null;
  async #connect() {
    try {
      let client = new MongoClient(this.#DB_URI);
      let db = client.db();
      return db;
    } catch (error) {
      console.log(error.message);
    }
  }
  async Get() {
    try {
      if (this.#db) {
        console.log("connect to DB is already alive")
        return this.#db 
      }
      this.#db = await this.#connect()
      return this.#db
    } catch (error) {
      console.log(error.message)
    }
  }
}

async function main() {
  const db = await new connectToMongoDB().Get()
  const result = await db.collection("user").find({}).toArray()
  console.log(result)
}

main()