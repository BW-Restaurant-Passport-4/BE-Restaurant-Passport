
exports.up = function (knex) {
  return knex.schema.createTable("users_restaurants", tbl => {
    tbl.unique(["passportHolder_id", "restaurant_id"])
    tbl
      .integer("passportHolder_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    tbl
      .integer("restaurant_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("restaurants")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users_restaurants")
};
