const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

const Users = require("../users/users-model.js");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      const token = genToken(saved)
      res.status(201).json({ created_user: saved, token: token })
    })
    .catch(err => {
      res.status(500).json(error);
    })
})

function genToken(user) {
  const payload = {
    userid: user.id,
    username: user.username
  }
  const options = {
    expiresIn: '1h'
  }
  const token = jwt.sign(payload, secrets.jwtSecret, options)
  return token
}

module.exports = router;