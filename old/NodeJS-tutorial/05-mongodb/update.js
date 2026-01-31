const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorial";
const client = new MongoClient(DB_URL)

async function main() {
  await client.connect();
  console.log("Connected to DB");
  const db = client.db(DB_Name);
  const userCollection = db.collection("user");

  // updateOne
  // const result = await userCollection.updateOne({_id: new ObjectId("67a7c9e16b038730c3a79fa7")}, {
  //   $set: {address: {province: "Tehran", city: "Tehran", street: "behbodi"}}
  // })
  // const result = await userCollection.updateOne({_id: new ObjectId("67a7d4920c823ba61827f1da")}, {
  //   $push: {skills: "ExpressJS"}
  // })
  // const result = await userCollection.updateOne({_id: new ObjectId("67a7d4920c823ba61827f1da")}, {
  //   $pull: {skills: "JavaScript"}
  // })
  // const result = await userCollection.updateOne({_id: new ObjectId("67a7d4920c823ba61827f1da")}, {
  //   $inc: {age: 1}, // -Num will decrease
  // })
  // const result = await userCollection.updateOne({_id: new ObjectId("67a7d4920c823ba61827f1da")}, {
  //   $rename: {age: "userAge"}
  // })

  // updateMany
  // const result = await userCollection.updateMany({firstName: "seyed ali"}, {
  //   $set: {address: {province: "Tehran", city: "Tehran", street: "azar"}}
  // })

  // findOneAndUpdate
  const result = await userCollection.findOneAndUpdate({firstName: "seyed ali"}, {
    $set: {address: {province: "Tehran", city: "Tehran", street: "azar"}}
  })

  console.log(result)
};

main()