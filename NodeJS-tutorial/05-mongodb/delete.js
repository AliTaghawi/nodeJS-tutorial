const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorial";
const client = new MongoClient(DB_URL)

async function main() {
  await client.connect();
  console.log("Connected to DB");
  const db = client.db(DB_Name);
  const userCollection = db.collection("user");

  // deleteOne
  // const result = await userCollection.deleteOne({firstName: "seyed ali"})
  // const result = await userCollection.deleteOne({_id: new ObjectId("67a7d437a9571defad209bda")})

  // deleteMany
  // const result = await userCollection.deleteMany({firstName: "seyed heydar"})
  // const result = await userCollection.deleteMany({"address.province": "Alborz"})

  // findOneAndDelete
  const result = await userCollection.findOneAndDelete({firstName: "seyed ali"})

  console.log(result)
  
  // console.log("----------------------------")
  // userCollection.find({}).toArray().then(res => {
  //   console.log(res);
  // });
};

main()