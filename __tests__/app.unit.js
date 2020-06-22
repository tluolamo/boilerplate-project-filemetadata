/* eslint-env jest */
const request = require('supertest')
const App = require('../app')
const app = App.app

describe('Test Homepage', () => {
  test('It should respond to the GET method', async done => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    done()
  })
})
