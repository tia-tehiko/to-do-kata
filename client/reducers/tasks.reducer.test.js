import tasksReducer from './tasks.reducer'

test('initial state has three tasks', () => {
  let state = tasksReducer(undefined, {})
  expect(state.length).toBe(3)
})
