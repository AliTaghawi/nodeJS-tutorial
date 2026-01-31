const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL)

const main = async () => {
  await client.connect()
  console.log("connected to DB")
  const db = client.db(DB_Name)
  const userCollection = db.collection("user")

  // const user = await userCollection.findOne({_id: new ObjectId("694f9d7f273e84c0a1bce157")}, {
  //   projection: {
  //     lastName: 0,
  //     role: 0
  //   }
  // })
  // const user = await userCollection.findOne({_id: new ObjectId("694f9d7f273e84c0a1bce157")}, {
  //   projection: {
  //     firstName: 1,
  //     age: 1
  //   }
  // })
  // const users = await userCollection.find({}, {
  //   limit: 2
  // }).toArray()
  // const users = await userCollection.find({}, {
  //   skip: 2,
  //   limit: 1
  // }).toArray()
  const users = await userCollection.find({}, {
    sort: {_id: -1}
  }).toArray()
  
  console.log(users)
}

main()