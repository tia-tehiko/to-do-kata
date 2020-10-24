import request from 'superagent'

export function fetchTasks () {
  return request
    .get('/api/v1/tasks')
    .then(res => res.body)
}

export function addTask (taskName) {
  return request
    .post('/api/v1/tasks')
    .send({ taskName })
}
