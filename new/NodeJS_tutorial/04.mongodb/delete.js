const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL)

const main = async () => {
  await client.connect()
  console.log("connected to DB")
  const db = client.db(DB_Name)
  const userCollection = db.collection("user")

  // DELETE ONE
  // const result = await userCollection.deleteOne({firstName: "seyed ali"})
  // const result = await userCollection.deleteOne({_id: new ObjectId("694f869269f4f283474ecd30")})
  // console.log("result:", result)

  //DELETE MANY
  // const result = await userCollection.deleteMany({}) // will delete all
  // const result = await userCollection.deleteMany({"address.province": "Tehran"})
  // console.log("Deleted docs result:", result)

  //FIND ONE AND DELETE
  const result = await userCollection.findOneAndDelete({"address.province": "Tehran"})
  console.log("Deleted doc result:", result)
}

main()