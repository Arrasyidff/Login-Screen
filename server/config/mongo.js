const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url, { useUnifiedTopology: true });
client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

const db = client.db("login-screen");

module.exports = db;
