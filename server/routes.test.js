import request from 'supertest'
import server from './server'

import { getTasks } from './db'

jest.mock('./db', () => ({
  getTasks: jest.fn()
}))

describe('GET /api/v1/tasks', () => {
  test('returns tasks when successful', () => {
    getTasks.mockImplementation(() => Promise.resolve([
      { id: 1, name: 'update portfolio' },
      { id: 2, name: 'do washing' },
      { id: 3, name: 'ring mum' }
    ]))

    return request(server)
      .get('/api/v1/tasks')
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(3)
        return null
      })
  })
  test('returns 500 if database function fails', () => {
    getTasks.mockImplementation(() => Promise.reject(new Error('error')))
    return request(server)
      .get('/api/v1/tasks')
      .then(res => {
        expect(res.status).toBe(500)
        return null
      })
  })
})
