
exports.up = function (knex) {
  return knex.schema.createTable("restaurants", tbl => {
    tbl.increments();
    tbl.string("restaurant_name", 128).notNullable().unique();
    tbl.string("restaurant_address", 128).notNullable().unique();
    tbl.string("restaurant_city", 128).notNullable();
    tbl.string("restaurant_zip", 128).notNullable();
    tbl.string("restaurant_phone_number", 128).notNullable();
    tbl.string("restaurant_website", 128).notNullable().unique();
    tbl.integer("restaurant_rating").notNullable();
    tbl.string("restaurant_notes").notNullable();
    tbl.boolean("restaurant_stamped", 128).notNullable().defaultTo(false);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("restaurants")
};
