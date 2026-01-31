const { MongoClient } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL)

const main = async () => {
  await client.connect()
  console.log("connected to DB")
  const db = client.db(DB_Name)
  const userCollection = db.collection("user")
  const result = await userCollection.insertOne({
    firstName: "seyed ali",
    lastName: "taghawi",
    role: "developer",
    skills: ["javaScript", "typeScript", "Node.js", "React.js", "Next.js", "tailwind CSS", "HTML", "CSS", "Redux", "SCSS", "mongoDB"],
    birthday: new Date("09-15-1991"),
    address: {
      province: "Alborz",
      city: "Karaj"
    }
  })
  console.log("result:", result)

  userCollection.find({}).toArray().then(res => {
    console.log(res)
  })
}

main()