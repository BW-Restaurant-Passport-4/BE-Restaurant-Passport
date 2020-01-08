const Users = require('./users-model.js');
const db = require('../data/dbConfig.js');

describe('users model', () => {
  beforeEach(async () => {
    await db('passportHolder').truncate()
  })
  describe('add user', () => {
    it('should add a user into the db', async () => {
      await Users.add({ username: 'flynn23', password: 'password', first_name: 'Flynn', last_name: 'Barnett', city: 'Salt Lake City', email: 'flynn23@email.com' })
      await Users.add({ username: 'beaux45', password: 'password', first_name: 'Beaux', last_name: 'Barnett', city: 'Salt Lake City', email: 'beaux45@email.com' })
      const user = await db('passportHolder')
      expect(user).toHaveLength(2);
    })
    it('should return the user inserted', async () => {
      let user1 = await Users.add({ username: 'flynn23', password: 'password', first_name: 'Flynn', last_name: 'Barnett', city: 'Salt Lake City', email: 'flynn23@email.com' })
      expect(user1.username).toBe('flynn23')
      let user2 = await Users.add({ username: 'beaux45', password: 'password', first_name: 'Beaux', last_name: 'Barnett', city: 'Salt Lake City', email: 'beaux45@email.com' })
      expect(user2.username).toBe('beaux45');
    })
  })
})