const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        console.log(err)
        res.status(401).json({ message: 'You shall not pass.' })
      } else {
        req.decodedJwt = decodedToken
        next()
      }
    })
  } else {
    res.status(401).json({ message: 'You don\'t have permission.' })
  }
}