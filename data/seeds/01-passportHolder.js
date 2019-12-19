const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('passportHolder').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('passportHolder').insert([
        { username: 'Demo1', password: bcrypt.hashSync("password", 10), first_name: "Kyle", last_name: "Barnett", city: "Salt Lake City", email: "demo1@email.com"},
        { username: 'Demo2', password: bcrypt.hashSync("password", 10), first_name: "John", last_name: "Barnett", city: "Dallas", email: "demo2@email.com"},
        { username: 'Demo3', password: bcrypt.hashSync("password", 10), first_name: "Delaney", last_name: "Barnett", city: "Fort Worth", email: "demo3@email.com"}
      ]);
    });
};
