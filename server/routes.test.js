import request from 'supertest'
import server from './server'

test('GET/ api/v1/tasks', () => {
  return request(server)
    .get('/api/v1/tasks')
    .then(res => {
      expect.assertions(2)
      expect(res.status).toBe(200)
      expect(res.body).toHaveLength(3)
      return null
    })
})
