const db = require('../data/dbConfig.js');
const Restaurants = require('./restaurant-model.js');

describe('restaurant helper', () => {
  beforeEach(async () => {
    await db('restaurants').truncate();
  });
  describe('delete', () => {
    it('should delete restaurant after adding', async () => {
      await Restaurants.add({
        restaurant_name: 'Chick-fil-A', restaurant_address: '123 A Street', restaurant_city: 'Salt Lake City', restaurant_zip: '12345', restaurant_phone_number: '801-123-4567', restaurant_website: 'chick-fil-a.com', restaurant_rating: 5, restaurant_notes: 'Great chicken sandwich', restaurant_stamped: true
      });
      const restaurant1 = await db('restaurants')
      await Restaurants.remove(restaurant1.id);
      const restaurantDb = await db('restaurants');
      console.log(restaurantDb)
      expect(restaurantDb).toHaveLength(0);
    });
  })
  describe('find', () => {
    it('find', async () => {
      const restaurant1 = await Restaurants.find()

      expect(restaurant1).toHaveLength(0)
    })
  })
})