
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('restaurants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        { restaurant_name: 'Chick-fil-A', restaurant_address: '123 A Street', restaurant_city: 'Salt Lake City', restaurant_zip: '12345', restaurant_phone_number: '801-123-4567', restaurant_website: 'chick-fil-a.com', restaurant_rating: 5, restaurant_notes: 'Great chicken sandwich', restaurant_stamped: true },
        { crestaurant_name: 'Sapa', restaurant_address: '234 B Street', restaurant_city: 'Salt Lake City', restaurant_zip: '23456', restaurant_phone_number: '801-234-5678', restaurant_website: 'sapabarandgrill.com', restaurant_rating: 4, restaurant_notes: 'Terrific sushi and appetizers', restaurant_stamped: false },
        { restaurant_name: 'Nuchs', restaurant_address: '345 C Street', restaurant_city: 'Salt Lake City', restaurant_zip: '24678', restaurant_phone_number: '801-123-5555', restaurant_website: 'nuchs-pizzeria-and-restaurant.com', restaurant_rating: 2, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: false }
      ]);
    });
};
