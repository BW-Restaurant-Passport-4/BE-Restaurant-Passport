const request = require('supertest');

const server = require('../api/server.js');
const db = require('../data/dbConfig.js');
const Users = require('../users/users-model.js');

describe('auth model', () => {
  beforeEach(async () => {
    await db('passportHolder').truncate()
  })
  describe('register user', () => {
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
  // describe('login user', () => {
  //   it('should login user', async () => {
  //     await Users.add({ username: 'flynn23', password: 'password', first_name: 'Flynn', last_name: 'Barnett', city: 'Salt Lake City', email: 'flynn23@email.com' })
  //     const username = 'flynn23'
  //     await Users.findBy({ username })
  //     const nextUser = await db('passportHolder')
  //     expect(nextUser.username).toBe('flynn23')
  //   })
  // })
})