const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  getRestaurantsById
}

function find() {
  return db("restaurants")
}

function findById(id) {
  return db("restaurants").where({ id })
}

function add(info) {
  return db("restaurants").insert(info, 'id')
}

function getRestaurantsById(id) {
  return db("users_restaurants")
    .select('r.restaurant_name', 'r.restaurant_address', 'r.restaurant_city', 'r.restaurant_zip', 'r.restaurant_phone_number', 'r.restaurant_website', 'r.restaurant_rating', 'r.restaurant_stamped')
    .from('users_restaurants as ur')
    .join('restaurants as r', 'r.id', 'ur.restaurant_id')
    .where('ur.passportHolder_id', '=', id)
}