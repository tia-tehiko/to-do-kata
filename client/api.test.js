import nock from 'nock'
import { fetchTasks } from './api'

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
