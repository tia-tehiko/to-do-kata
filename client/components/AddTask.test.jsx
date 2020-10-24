import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import AddTask from './AddTask'
import { addTask } from '../api'

jest.mock('../api', () => ({
  addTask: jest.fn()
}))

test('render add task form', () => {
  render(<AddTask />)
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { name: 'name', value: 'new task' } })

  const submit = screen.getByRole('button')
  fireEvent.click(submit)

  expect(addTask).toHaveBeenCalled()
  expect(addTask.mock.calls[0][0]).toBe('new task')
})
