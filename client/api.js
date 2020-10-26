import request from 'superagent'

export function fetchTasks() {
  return request
    .get('/api/v1/tasks')
    .then(res => res.body)
}

export function addTask(name) {
  return request
    .post('/api/v1/tasks')
    .send({ name })
    .then(res => res.body.id)
}

export function deleteTask(id) {
  return request
    .delete('/api/v1/tasks/' + id)
    .then(res => res.body)
}
