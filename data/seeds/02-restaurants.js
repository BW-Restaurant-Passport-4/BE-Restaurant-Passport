
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        { restaurant_name: 'Chick-fil-A', restaurant_address: '123 A Street', restaurant_city: 'Salt Lake City', restaurant_zip: '12345', restaurant_phone_number: '801-123-4567', restaurant_website: 'chick-fil-a.com', restaurant_rating: 5, restaurant_notes: 'Great chicken sandwich', restaurant_stamped: true },
        { restaurant_name: 'Sapa', restaurant_address: '234 B Street', restaurant_city: 'Salt Lake City', restaurant_zip: '23456', restaurant_phone_number: '801-234-5678', restaurant_website: 'sapabarandgrill.com', restaurant_rating: 4, restaurant_notes: 'Terrific sushi and appetizers', restaurant_stamped: false },
        { restaurant_name: 'Nuchs', restaurant_address: '345 C Street', restaurant_city: 'Salt Lake City', restaurant_zip: '24678', restaurant_phone_number: '801-123-5555', restaurant_website: 'nuchs-pizzeria-and-restaurant.com', restaurant_rating: 2, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: false },
        { restaurant_name: 'Restaurant A', restaurant_address: 'Restaurant A Street', restaurant_city: 'Salt Lake City', restaurant_zip: '11111', restaurant_phone_number: '801-111-1111', restaurant_website: 'restauranta.com', restaurant_rating: 2, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: false },
        { restaurant_name: 'Restaurant B', restaurant_address: 'Restaurant B Street', restaurant_city: 'Salt Lake City', restaurant_zip: '22222', restaurant_phone_number: '801-222-2222', restaurant_website: 'restaurantb.com', restaurant_rating: 2, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: false },
        { restaurant_name: 'Restaurant C', restaurant_address: 'Restaurant C Street', restaurant_city: 'Salt Lake City', restaurant_zip: '33333', restaurant_phone_number: '801-333-3333', restaurant_website: 'restaurantc.com', restaurant_rating: 3, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: true },
        { restaurant_name: 'Restaurant D', restaurant_address: 'Restaurant D Street', restaurant_city: 'Salt Lake City', restaurant_zip: '44444', restaurant_phone_number: '801-444-4444', restaurant_website: 'restaurantd.com', restaurant_rating: 4, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: true },
        { restaurant_name: 'Restaurant E', restaurant_address: 'Restaurant E Street', restaurant_city: 'Salt Lake City', restaurant_zip: '55555', restaurant_phone_number: '801-555-5555', restaurant_website: 'restaurante.com', restaurant_rating: 1, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: true },
        { restaurant_name: 'Restaurant F', restaurant_address: 'Restaurant F Street', restaurant_city: 'Salt Lake City', restaurant_zip: '66666', restaurant_phone_number: '801-666-6666', restaurant_website: 'restaurantf.com', restaurant_rating: 2, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: false },
        { restaurant_name: 'Restaurant G', restaurant_address: '345 G Street', restaurant_city: 'Salt Lake City', restaurant_zip: '77777', restaurant_phone_number: '801-777-7777', restaurant_website: 'restaurantg.com', restaurant_rating: 2, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: true },
        { restaurant_name: 'Restaurant H', restaurant_address: '345 H Street', restaurant_city: 'Salt Lake City', restaurant_zip: '88888', restaurant_phone_number: '801-888-8888', restaurant_website: 'restauranth.com', restaurant_rating: 5, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: true },
        { restaurant_name: 'Restaurant I', restaurant_address: '345 I Street', restaurant_city: 'Salt Lake City', restaurant_zip: '99999', restaurant_phone_number: '801-999-9999', restaurant_website: 'restauranti.com', restaurant_rating: 2, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: false },
        { restaurant_name: 'Restaurant J', restaurant_address: '345 J Street', restaurant_city: 'Salt Lake City', restaurant_zip: '10101', restaurant_phone_number: '801-101-0101', restaurant_website: 'restaurantj.com', restaurant_rating: 2, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: false },
        { restaurant_name: 'Restaurant K', restaurant_address: '345 K Street', restaurant_city: 'Salt Lake City', restaurant_zip: '12112', restaurant_phone_number: '801-121-2221', restaurant_website: 'restaurantk.com', restaurant_rating: 2, restaurant_notes: 'Hot pizza spot that I want to go to.', restaurant_stamped: false },

      ]);
    });
};
