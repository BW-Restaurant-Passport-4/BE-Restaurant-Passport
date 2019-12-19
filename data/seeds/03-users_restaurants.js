
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users_restaurants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_restaurants').insert([
        { passportHolder_id: 1, restaurant_id: 1 },
        { passportHolder_id: 1, restaurant_id: 2 },
        { passportHolder_id: 1, restaurant_id: 3 },
        { passportHolder_id: 2, restaurant_id: 1 },
        { passportHolder_id: 2, restaurant_id: 2 },
        { passportHolder_id: 2, restaurant_id: 3 },
        { passportHolder_id: 3, restaurant_id: 1 },
        { passportHolder_id: 3, restaurant_id: 2 },
        { passportHolder_id: 3, restaurant_id: 3 },
      ]);
    });
};
