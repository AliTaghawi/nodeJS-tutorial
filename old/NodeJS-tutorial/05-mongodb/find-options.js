const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorial";
const client = new MongoClient(DB_URL)

async function main() {
  await client.connect();
  console.log("Connected to DB");
  const db = client.db(DB_Name);
  const userCollection = db.collection("user");

  // const result = await userCollection.findOne({_id: new ObjectId("67a7c9e16b038730c3a79fa7")}, {
  //   projection: {
  //     age: 0,
  //     address: 0,
  //   }
  // });
  // const result = await userCollection.find({}, {
  //   projection: {
  //     firstName: 1,
  //   }
  // }).toArray();
  // const result = await userCollection.find({}, {
  //   projection: {
  //     address: 0,
  //   },
  //   limit: 2,
  //   skip: 2,
  // }).toArray();
  // const result = await userCollection.find({}, {
  //   projection: {
  //     firstName: 1,
  //   },
  //   sort: {_id: -1} // for ID -1 will sort from newest to oldest and 1 is opposite || but overall -1 will sort from largest num to smallest and 1 is opposite
  // }).toArray();
  const result = await userCollection.find({}, {
    projection: {
      firstName: 1,
      age: 1
    },
    sort: {age: -1} // for ID -1 will sort from newest to oldest and 1 is opposite || but overall -1 will sort from largest num to smallest and 1 is opposite
  }).toArray();
  console.log(result)
};

main()