import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Task } from './Task'
import { deleteTask } from '../api'

jest.mock('../api', () => ({
  deleteTask: jest.fn(() => Promise.resolve('done'))
}))

const task = { id: 1, name: 'get bread' }
beforeEach(() => render(<Task task={task} />))

test('renders list item', () => {
  const listItem = screen.getByRole('listitem')
  expect(listItem.innerHTML).toMatch(/get bread/)
})

test('delete button is hidden', () => {
  const button = screen.queryByRole('button')
  expect(button).toBeNull()
})

test('shows delete button when hovering over item', () => {
  const listItem = screen.getByRole('listitem')
  fireEvent.mouseEnter(listItem)
  const button = screen.getByRole('button')
  expect(button).not.toBeUndefined()
})

test('calls deleteTask from api when delete button clicked', () => {
  const listItem = screen.getByRole('listitem')
  fireEvent.mouseEnter(listItem)
  const button = screen.getByRole('button')
  fireEvent.click(button)
  expect(deleteTask).toHaveBeenCalledWith(task.id)
})
