const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL)

const main = async () => {
  await client.connect()
  console.log("connected to DB")
  const db = client.db(DB_Name)
  const userCollection = db.collection("user")
  
  // UPDATE ONE
  // const result = await userCollection.updateOne({_id: new ObjectId("694f9d7f273e84c0a1bce158")}, {
  //   $set: {age: 34} // will add age to document
  // })
  // const result = await userCollection.updateOne({_id: new ObjectId("694f9d7f273e84c0a1bce158")}, {
  //   $set: {skills: ["front-end", "full-stack", "back-end"]} // changing all skills (reset skill value)
  // })
  // const result = await userCollection.updateOne({_id: new ObjectId("694f9d7f273e84c0a1bce158")}, {
  //   $push: {skills: "TypeScript"} // will add value to skills array
  // })
  // const result = await userCollection.updateOne({_id: new ObjectId("694f9d7f273e84c0a1bce158")}, {
  //   $pull: {skills: "TypeScript"} // will delete values equal to "TypeScript" in skills array
  // })
  // const result = await userCollection.updateOne({_id: new ObjectId("694f9d7f273e84c0a1bce158")}, {
  //   $unset: {age: 0} // will delete property
  // })
  // const result = await userCollection.updateOne({_id: new ObjectId("694f9d7f273e84c0a1bce158")}, {
  //   $inc: {age: 2} // will add to property (num)
  // })
  // const result = await userCollection.updateOne({_id: new ObjectId("694f9d7f273e84c0a1bce158")}, {
  //   $inc: {"userAge": -2} // also can be use for discount by set "-" before number
  // })
  // const result = await userCollection.updateOne({_id: new ObjectId("694f9d7f273e84c0a1bce158")}, {
  //   $rename: {age: "userAge"} // renaming property 
  // })

  // const result = await userCollection.updateOne({_id: new ObjectId("694f9d7f273e84c0a1bce158")}, {
  //   $unset: {"userAge": 1},
  //   $push: {skills: "Node.js"},
  //   $set: {age: 34},
  // })
  // console.log(result)
  
  // // UPDATE MANY
  // const result = await userCollection.updateMany({firstName: "seyed ali"}, {
  //   $set: {age: 34}
  // })
  // console.log(result)

  // FIND ONE AND UPDATE
  const result = await userCollection.findOneAndUpdate({firstName: "seyed ali"}, {
    $push: {skills: "Node.js"}
  })
  console.log(result)
}

main()