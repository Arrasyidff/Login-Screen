const bcrypt = require("bcrypt");

function hashPass(pass) {
  const salt = bcrypt.genSaltSync(10);
  return (pass = bcrypt.hashSync(pass, salt));
}

function comparePass(pass, hash) {
  return bcrypt.compareSync(pass, hash);
}

module.exports = {
  hashPass,
  comparePass,
};
