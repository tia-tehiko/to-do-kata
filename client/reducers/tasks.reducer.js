import { SET_TASKS } from '../actions'

export default function tasksReducer (state = [], action) {
  switch (action.type) {
    case SET_TASKS:
      return action.tasks

    default:
      return state
  }
}
