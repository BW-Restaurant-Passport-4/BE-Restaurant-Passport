const request = require('supertest');

const server = require('../api/server.js');
const db = require('../data/dbConfig.js');

describe('restaurant router', () => {
  beforeEach(async () => {
    await db('restaurants').truncate()
  })
  describe('GET / ', () => {
    it('should return 200 ok', async () => {
      const res = await request(server).get('/restaurants');
      expect(res.status).toBe(401);
    })
  })
})