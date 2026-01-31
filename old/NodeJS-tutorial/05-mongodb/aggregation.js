const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorial";
const client = new MongoClient(DB_URL)

async function main() {
  await client.connect();
  console.log("Connected to DB");
  const db = client.db(DB_Name);
  const userCollection = db.collection("user");
  const result = await userCollection.aggregate([
    {
      $match: { firstName: "seyed heydar"}
    },
    {
      $addFields: {
        "userAge": "$age"
      }
    },
    {
      $project: { age: 0 }
    },
  ]).toArray()
  console.log(result)
};

main()