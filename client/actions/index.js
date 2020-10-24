export const SET_TASKS = 'SET_TASKS'
export const ADD_TASKS = 'ADD_TASKS'

export function setTasks (tasks) {
  return ({
    type: SET_TASKS,
    tasks
  })
}

export function addTasks (task) {
  return ({
    type: ADD_TASKS,
    task
  })
}
