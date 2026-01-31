const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = "mongodb://localhost:27017"
const DB_Name = "mongodb-tutorials"
const client = new MongoClient(DB_URL)

const main = async () => {
  await client.connect()
  console.log("connected to DB")
  const db = client.db(DB_Name)
  const userCollection = db.collection("user")
  
  //FIND 
  // const allUsers = await userCollection.find({}).toArray()
  // const userBySkills = await userCollection.find({skills: "python"}).toArray()
  // const birthdayGraterThen = await userCollection.find({birthday: {$gte: new Date("01-01-1991")}}).toArray() // $gt = grater then | $gte grater then or equal
  // const birthdayLastThen = await userCollection.find({birthday: {$lte: new Date("01-01-1991")}}).toArray() // $gt = last then | $gte last then or equal
  // const usersByCity = await userCollection.find({"address.city" : "Karaj"}).toArray() // $gt = last then | $gte last then or equal
  // const users = await userCollection.find({"address.city": {$in: ["karaj", "Karaj", "Tehran"]}}).toArray() // $in use for array of data that could match
  // const users = await userCollection.find({_id: {$in: [new ObjectId('694f9d876cf9b406e49a999f'), new ObjectId('694f9d7f273e84c0a1bce159')]}}).toArray() // $in use for array of data that could match
  // const users = await userCollection.find({skills: {$in: ["python", "javaScript"]}}).toArray() // $in use for array of data that could match
  // console.log(users)

  //FIND ONE
  const user = await userCollection.findOne({skills: "Node.js"}) // will find fist match
  console.log(user)
}

main()