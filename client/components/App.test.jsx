import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from './App'
import store from '../store'
import { fetchTasks } from '../api'

jest.mock('../api', () => ({
  fetchTasks: jest.fn()
}))

jest.spyOn(store, 'getState')
jest.spyOn(store, 'dispatch')

const tasks = [
  { id: 1, name: 'update portfolio' },
  { id: 2, name: 'do washing' },
  { id: 3, name: 'ring mum' }
]

beforeEach(() => {
  store.getState.mockImplementation(() => ({ tasks }))
  fetchTasks.mockImplementation(() => Promise.resolve(tasks))
})

test('displays a task list', () => {
  render(<Provider store={store}><App /></Provider>)
  expect.assertions(2)
  const tasks = screen.getAllByRole('listitem')
  expect(tasks).toHaveLength(3)
  expect(tasks[0].innerHTML).toMatch(/portfolio/)
})

test('get tasks from api when component mounts', () => {
  render(<Provider store={store}><App /></Provider>)
  waitFor(() => store.dispatch.mock.calls.length === 1)
  expect(store.dispatch).toHaveBeenCalled()
  expect(store.dispatch.mock.calls[0][0].type).toBe('SET_TASKS')
})
