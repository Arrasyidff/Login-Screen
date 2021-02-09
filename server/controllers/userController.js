const UsersModel = require("../models/user");
const { insertUser, findOneUser } = UsersModel;
const { getToken } = require("../helper/generateToken");
const { hashPass, comparePass } = require("../helper/hashingPass");

class UserController {
  static register(req, res) {
    let { email, password } = req.body;
    password = hashPass(password);
    insertUser(email, password)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static login(req, res, next) {
    const { email, password } = req.body;
    findOneUser(email)
      .then((data) => {
        if (data) {
          const access_token = getToken({ id: data._id, email: data.email });
          // res.status(200).json({ access_token });
          if (comparePass(password, data.password)) {
            res.status(200).json({ access_token });
          } else {
            next({ name: "invalid account" });
          }
        } else {
          next({ name: "invalid account" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = UserController;
