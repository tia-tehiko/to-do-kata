import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../store'
import AddTask from './AddTask'
import { addTask, fetchTasks } from '../api'

jest.mock('../api', () => ({
  addTask: jest.fn(() => Promise.resolve(1)),
  fetchTasks: jest.fn()
}))

jest.spyOn(store, 'dispatch')

test('saves task', () => {
  const tasks = [{ id: 1, name: 'get that bread' }]
  fetchTasks.mockImplementation(() => Promise.resolve(tasks))
  render(<Provider store={store}><AddTask /></Provider>)
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { name: 'name', value: 'new task' } })

  const submit = screen.getByRole('button')
  fireEvent.click(submit)

  expect(addTask).toHaveBeenCalled()
  expect(addTask.mock.calls[0][0]).toBe('new task')
})
