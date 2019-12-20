require("dotenv").config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const authRouter = require("../auth/auth-router.js");
const restaurantRouter = require("../restaurants/restaurant-router.js");
const Users = require('../users/users-model.js');
const restricted = require('../auth/restricted-middleware.js');

server.use("/auth", authRouter);
server.use("/restaurants", restricted, restaurantRouter);

server.get('/', (req, res) => {
  res.json({ api: 'Up and running.' })
})

module.exports = server;