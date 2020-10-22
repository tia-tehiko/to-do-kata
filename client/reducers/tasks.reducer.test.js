import tasksReducer from './tasks.reducer'
import { setTasks } from '../actions'

test('initial state is an empty array', () => {
  const state = tasksReducer(undefined, {})
  expect(state).toHaveLength(0)
})

test('SET_TASKS action sets the tasks', () => {
  const tasks = [{ name: 'get that bread' }]
  const action = setTasks(tasks)
  const newState = tasksReducer([], action)
  expect(newState).toEqual(tasks)
})
