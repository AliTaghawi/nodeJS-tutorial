const { ObjectId } = require("mongodb");
const ConnectToDB = require("../utils/connectDB");

let productCollection = null;
(async function () {
  const db = await new ConnectToDB().Get();
  productCollection = await db.collection("products");
})();

async function find() {
  return await productCollection.find({}).toArray();
}

async function create(data) {
  const result = await productCollection.insertOne(data);
  return result;
}

async function findOne(id) {
  try {
    const result = await productCollection.findOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function updateOne(id, payload) {
  try {
    const result = await productCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: payload,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function deleteOne(id) {
  try {
    const result = await productCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const ProductModels = {
  find,
  create,
  findOne,
  updateOne,
  deleteOne,
};

module.exports = ProductModels;
