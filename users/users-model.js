const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findById
}

async function add(user) {
  const [id] = await db("passportHolder").insert(user)
  return findById(id)
}

function find() {
  return db("passportHolder")
}

function findById(id) {
  return db("passportHolder").where({ id }).first()
}