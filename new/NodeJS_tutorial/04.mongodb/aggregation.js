const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL)

const main = async () => {
  await client.connect()
  console.log("connected to DB")
  const db = client.db(DB_Name)
  const userCollection = db.collection("user")

  // AGGREGATE
  // const result = await userCollection.aggregate([]).toArray() // will find all docs
  const result = await userCollection.aggregate([
    {
      $match : {
        firstName: "seyed ali"
      }
    },
    {
      $addFields: {
        "userAge": "$age"
      }
    },
    {
      $project: {
        age: 0
      }
    }
  ]).toArray() // will find all docs
  console.log(result)
}

main()