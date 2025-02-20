const fs = require("fs");
const connectToMongoDB = require("../utils/connectionToDB");
const { ObjectId } = require("mongodb");
// const products = require("../data/products.json");


async function find() {
  const db = await new connectToMongoDB().Get()
  return new Promise(async (resolve, reject) => {
    const products = await db.collection("product").find().toArray()
    resolve(products);
  });
}

async function findById(id) {
  const db = await new connectToMongoDB().Get()
  return new Promise(async (resolve, reject) => {
    const product = await db.collection("product").findOne({_id: new ObjectId(id) })
    resolve(product);
  });
}

async function create(product) {
  const db = await new connectToMongoDB().Get()
  return new Promise(async (resolve, reject) => {
    try {
      const result = await db.collection("product").insertOne(product)
      resolve({message: "product added successfully", data: result})
    } catch (err) {
      reject(err.message)
    }
  })
}

async function update(id , payload) {
  const db = await new connectToMongoDB().Get()
  return new Promise(async (resolve, reject) => {
    try {
      const result = await db.collection("product").updateOne({_id: new ObjectId(id)}, {
        $set: {...payload}
      })
      resolve({message: "product updated successfully", data: result})
    } catch (err) {
      reject(err.message)
    }
  })
}

async function remove(id) {
  const db = await new connectToMongoDB().Get()
  return new Promise(async (resolve, reject) => {
    try {
      const result = await db.collection("product").deleteOne({_id: new ObjectId(id)})
      resolve({message: "product deleted successfully", data: result})
    } catch (err) {
      reject(err.message)
    }
  })
}

const productModels = {
  find,
  findById,
  create,
  update,
  remove
};

module.exports = productModels;
