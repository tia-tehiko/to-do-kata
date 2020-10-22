export function fetchTasks () {
  const tasks = [
    { id: 1, name: 'update portfolio' },
    { id: 2, name: 'do washing' },
    { id: 3, name: 'ring mum' }
  ]
  return Promise.resolve(tasks)
}
