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
const Users = require('../users/users-model.js')

server.use("/api/auth", authRouter);
server.use("/api/restaurants", restaurantRouter);

server.get('/', (req, res) => {
  res.json({ api: 'Up and running.' })
})

server.get('/users', (req, res) => {
  Users.find()
    .then(results => {
      res.json(results)
    })
})

module.exports = server;