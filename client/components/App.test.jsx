import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

jest.mock('./Tasks.jsx', () => {
  return () => <h1>Task List</h1>
})

test('renders tasks', () => {
  render(<App />)
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch(/Task List/)
})