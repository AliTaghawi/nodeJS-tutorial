const { MongoClient } = require("mongodb")

class ConnectDB {
  #DB_URI = "mongodb://localhost:27017/mongodb-tutorials"
  #db = null
  async #connect() {
    try {
      const client = new MongoClient(this.#DB_URI)
      const db = client.db()
      return db
    } catch (error) {
      console.log(error.message)
    }
  }

  async Get() {
    try {
      if (this.#db) {
        console.log("db connection is already alive")
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
  const db = await new ConnectDB().Get()
  const userCollection = await db.collection("user")
  const users = await userCollection.find({}).toArray()
  console.log(users)
}

main()