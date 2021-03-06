import request from 'supertest'
import server from './server'

import { getTasks, saveTask, deleteTask } from './db'

jest.mock('./db', () => ({
  getTasks: jest.fn(),
  saveTask: jest.fn(),
  deleteTask: jest.fn()
}))

describe('GET /api/v1/tasks', () => {
  test('returns tasks when successful', () => {
    getTasks.mockImplementation(() => Promise.resolve([
      { id: 1, name: 'update portfolio' },
      { id: 2, name: 'do washing' },
      { id: 3, name: 'ring mum' }
    ]))
    expect.assertions(2)

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
    expect.assertions(1)

    return request(server)
      .get('/api/v1/tasks')
      .then(res => {
        expect(res.status).toBe(500)
        return null
      })
  })
})

describe('POST /api/v1/tasks', () => {
  test('save task to database', () => {
    saveTask.mockImplementation(() => Promise.resolve([3]))
    expect.assertions(4)

    return request(server)
      .post('/api/v1/tasks')
      .send({ name: 'new task' })
      .then(res => {
        expect(saveTask).toHaveBeenCalled()
        expect(saveTask.mock.calls[0][0].name).toBe('new task')
        expect(res.status).toBe(201)
        expect(res.body.id).toBe(3)
        return null
      })
  })
})

describe('DELETE /api/v1/tasks/:id', () => {
  test('remove task from database', () => {
    deleteTask.mockImplementation(() => Promise.resolve(1))
    expect.assertions(3)

    return request(server)
      .delete('/api/v1/tasks/1')
      .then(res => {
        expect(deleteTask).toHaveBeenCalled()
        expect(deleteTask).toHaveBeenCalledWith(1)
        expect(res.status).toBe(200)
        return null
      })
  })
})
