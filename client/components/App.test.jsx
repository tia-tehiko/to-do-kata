import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

test('displays a task list', () => {
  render(<App />)
  expect.assertions(2)
  const tasks = screen.getAllByRole('listitem')
  expect(tasks).toHaveLength(3)
  expect(tasks[0].innerHTML).toMatch(/portfolio/)
})
