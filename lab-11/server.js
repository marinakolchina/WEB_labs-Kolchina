const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema({
  name: String,
  age: Number,
  city: String
});
// определяем модель User
const User = mongoose.model("User", userScheme);

const PORT = 7000;

const app = express();
app.use(bodyParser());

app.get("/", (req, res) => {
  res.status(200).type("text/plain");
  res.send("Hello");
});

app.post("/add", async (req, res) => {
  const { name, age, city } = req.body;
  try {
    const newUser = new User({
      name,
      age,
      city
    });

    const savedUser = await newUser.save();

    res.status(200).type("text/plain");
    res.send("Add client");
    console.log("Add client");
  } catch (err) {
    console.log("err :>> ", err);
    res.sendStatus(500);
  }
});

app.post("/delete", async (req, res) => {
  // console.log("req.body :>> ", req.body);
  const { name } = req.body;
  try {
    const result = await User.deleteMany({ name: name });
    // console.log(result);
  }
  catch (err) {
    console.log("err :>> ", err);
    res.sendStatus(500);
  }
  res.status(200).type("text/plain");
  res.send("Delete clients");
});

app.get("/clients", async (req, res) => {
  console.log("req :>> ", req.body);
  try {
    const clients = await User.find({});
    console.log(clients);
    res.status(200).type("text/plain");
    res.send(clients);
  }
  catch (err) {
    console.log("err :>> ", err);
    res.sendStatus(500);
  }
});

async function start() {
  try {
    await mongoose.connect("mongodb://localhost:27017/clients");
    console.log("DB Connection OK");
    app.listen(PORT, () => {
      console.log("Server has been started... on http://localhost:7000");
    });
  } catch (e) {
    console.log(e);
  }
}

start();
