const db = require("../config/mongo");
const Users = db.collection("Users");

class UsersModel {
  static insertUser(email, password) {
    const user = {
      email,
      password,
    };
    return Users.insertOne(user);
  }

  static findOneUser(email) {
    const user = {
      email
    };
    return Users.findOne(user);
  }
}

module.exports = UsersModel;
