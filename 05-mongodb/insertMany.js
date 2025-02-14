const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017";
const DB_Name = "mongodb-tutorial";
const client = new MongoClient(DB_URL)

async function main() {
  await client.connect();
  console.log("Connected to DB");
  const db = client.db(DB_Name);
  const userCollection = db.collection("user");
  const result = await userCollection.insertMany([
    {
      firstName: "seyed ali",
      lastName: "taghawi",
      age: 33,
      skills: ["JavaScript", "ReactJS", "NextJS", "NodeJS", "MongoDB"],
      address: {
        province: "Alborz",
        city: "Fardis",
        street: "golbarg"
      }
    },
    {
      firstName: "seyed heydar",
      lastName: "taghawi",
      age: 33,
      skills: ["JavaScript", "ReactJS", "NextJS", "NodeJS", "MongoDB"],
      address: {
        province: "Tehran",
        city: "Rey",
        street: "azar"
      }
    },
    {
      firstName: "seyed heydar",
      lastName: "taghawi",
      age: 33,
      skills: ["JavaScript", "ReactJS", "NextJS", "NodeJS", "MongoDB"],
      address: {
        province: "Tehran",
        city: "Tehran",
        street: "azar"
      }
    },
    {
      firstName: "seyed ali",
      lastName: "taghawi",
      age: 33,
      skills: ["JavaScript", "ReactJS", "NextJS", "NodeJS", "MongoDB"],
      address: {
        province: "Alborz",
        city: "Fardis",
        street: "golbarg"
      }
    },
    {
      firstName: "seyed ali",
      lastName: "taghawi",
      age: 33,
      skills: ["JavaScript", "ReactJS", "NextJS", "NodeJS", "MongoDB"],
      address: {
        province: "Alborz",
        city: "Fardis",
        street: "golbarg"
      }
    },
  ])
  console.log(result)
  userCollection.countDocuments({}).then(res => {
    console.log(res)
  })
  console.log("----------------------------")
  userCollection.find({}).toArray().then(res => {
    console.log(res);
  });
};

main()