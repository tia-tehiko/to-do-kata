import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from './App'
import store from '../store'

jest.spyOn(store, 'getState')

beforeEach(() => {
  store.getState.mockImplementation(() => ({
    tasks: [
      { id: 1, name: 'update portfolio' },
      { id: 2, name: 'do washing' },
      { id: 3, name: 'ring mum' }
    ]
  }))
})

test('displays a task list', () => {
  render(<Provider store={store}><App /></Provider>)
  expect.assertions(2)
  const tasks = screen.getAllByRole('listitem')
  expect(tasks).toHaveLength(3)
  expect(tasks[0].innerHTML).toMatch(/portfolio/)
})
