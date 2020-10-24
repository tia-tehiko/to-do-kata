/* eslint-disable */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../store'
import App from './App'

jest.mock('./Tasks.jsx', () => { return () => <h1> Task List</h1> })
jest.mock('./AddTask.jsx', () => { return () => <h1> Add New Task</h1> })

test('renders tasks', () => {
  render(<Provider store={store}><App /></Provider>)
  const heading = screen.getAllByRole('heading')
  expect(heading[0].innerHTML).toMatch(/Task List/)
})

test('renders add task', () => {
  render(<Provider store={store}><App /></Provider>)
  const heading = screen.getAllByRole('heading')
  expect(heading[1].innerHTML).toMatch('Add New Task')
})
