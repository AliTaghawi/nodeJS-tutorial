const express = require("express");
const { NotFoundError, ErrorHandler } = require("./utils/errorHandler");
const { BlogModel } = require("./models/blog.model");
const { isValidObjectId } = require("mongoose");
const omitEmpty = require("omit-empty");
const app = express();
require("./config/mongo.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res, next) => {
  res.send("index");
});

app.post("/create", async (req, res, next) => {
  try {
    const { title, text } = req.body;
    const result = await BlogModel.create({
      title,
      text,
    });
    res.send(result);
  } catch (error) {
    next(error);
  }
});

app.post("/new", async (req, res, next) => {
  try {
    const { title, text } = req.body;
    const newBlog = new BlogModel({
      title,
      text,
    });
    await newBlog.save();
    res.send(newBlog);
  } catch (error) {
    next(error);
  }
});

app.get("/insert-many", async (req, res, next) => {
  try {
    const newBlogs = await BlogModel.insertMany([
      {
        title: "1th title",
        text: "1th text",
      },
      {
        title: "2th title",
        text: "2th text",
      },
      {
        title: "3th title",
        text: "3th text",
      },
    ]);
    res.send(newBlogs);
  } catch (error) {
    next(error);
  }
});

app.post("/insert-one", async (req, res, next) => {
  try {
    const { title, text } = req.body;
    const result = await BlogModel.insertOne({ title, text });
    res.send(result);
  } catch (error) {
    next(error);
  }
});

app.get("/blogs", async (req, res, next) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).json({
      statusCode: 200,
      documentCount: blogs.length,
      blogs,
    });
  } catch (error) {
    next(error);
  }
});

app.get("/blogs/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw { status: 400, message: "bad request" };
    const blog = await BlogModel.findOne({ _id: id });
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
});

app.delete("/blogs/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) throw { status: 400, message: "bad request" };
    const result = await BlogModel.deleteOne({ _id: id });
    res.send(result);
  } catch (error) {
    next(error);
  }
});

app.delete("/blogs", async (req, res, next) => {
  try {
    const result = await BlogModel.deleteMany({});
    res.send(result);
  } catch (error) {
    next(error);
  }
});

app.patch("/blogs/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const newBlogObject = omitEmpty(req.body);

    // const blog = await BlogModel.findOne({_id: id})
    // if(!blog) throw {status: 404, message: "Blog not found"}
    // Object.assign(blog, newBlogObject)
    // await blog.save()
    // res.send(blog);

    // const blog = await BlogModel.findOneAndUpdate(
    //   { _id: id },
    //   { $set: { ...newBlogObject } }
    // );
    // res.send(blog);

    const result = await BlogModel.updateOne(
      { _id: id },
      { $set: newBlogObject }
    );
    res.send(result);
    
  } catch (error) {
    next(error);
  }
});

app.use(NotFoundError);
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("app runs on port 3000 : http://localhost:3000");
});
