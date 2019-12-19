const db = require('../data/dbConfig.js');

module.exports = {
  find,
  getRestaurantsById
}

function find() {
  return db("restaurants")
}

function getRestaurantsById(id) {
  return db("restaurants").where({ id })
}