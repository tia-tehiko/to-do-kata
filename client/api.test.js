import nock from 'nock'
import { fetchTasks, addTask, deleteTask } from './api'

test('fetch tasks from server', () => {
  nock(/localhost/)
    .get('/api/v1/tasks')
    .reply(200, [{ id: 1, name: 'clean house' }])

  return fetchTasks()
    .then(tasks => {
      expect(tasks).toHaveLength(1)
      expect(tasks[0].name).toBe('clean house')
      return null
    })
})

test('add task to server', () => {
  const scope = nock(/localhost/)
    .post('/api/v1/tasks')
    .reply(201)

  return addTask({ name: 'test task' })
    .then(() => {
      expect(scope.isDone()).toBe(true)
      return null
    })
})

test('delete task removes task from server', () => {
  const scope = nock(/localhost/)
    .delete('/api/v1/tasks/1')
    .reply(200)

  return deleteTask(1)
    .then(() => {
      expect(scope.isDone()).toBe(true)
      return null
    })
})
