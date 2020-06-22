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

describe('Test /api/fileanalyse', () => {
  test('It should respond to the post method', async done => {
    const testfile = 'testfile.txt'
    const response = await request(app)
      .post('/api/fileanalyse').attach('upfile', `${__dirname}/testfile.txt`)
    const body = response.body

    expect(response.statusCode).toBe(200)
    expect(body.filename).toBe(testfile)
    expect(body.bytes).toBe(21)
    done()
  })
})
