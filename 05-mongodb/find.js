const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorial";
const client = new MongoClient(DB_URL)

async function main() {
  await client.connect();
  console.log("Connected to DB");
  const db = client.db(DB_Name);
  const userCollection = db.collection("user");

  // const users = await userCollection.find({}).toArray()
  // const users = await userCollection.find({skills: "Python"}).toArray()
  // const users = await userCollection.find({"address.city": "Fardis"}).toArray()
  // const users = await userCollection.find({age: {$lte: 35}}).toArray()
  // const users = await userCollection.find({age: {$gte: 35}}).toArray()
  // const users = await userCollection.find({"address.city": {$in: ["Mashhad", "Shiraz", "Tehran"]}}).toArray()
  // console.log(users)

  // const user = await userCollection.findOne({})
  // const user = await userCollection.findOne({firstName: "seyed heydar"})
  console.log(user)
};

main()