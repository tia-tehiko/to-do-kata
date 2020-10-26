import React from 'react'
import { FaMinusCircle } from 'react-icons/fa'

import { deleteTask } from '../api'

export class Task extends React.Component {
  state = {
    showControls: false
  }

  showControls = () => {
    this.setState({ showControls: true })
  }

  hideControls = () => {
    this.setState({ showControls: false })
  }

  deleteTask = () => {
    deleteTask(this.props.task.id)
      .then(() => {
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    const { task } = this.props
    const { showControls } = this.state
    const deleteStyle = { color: 'red', marginRight: '10px', cursor: 'pointer' }
    return (
      <div>
        <li onMouseEnter={this.showControls} onMouseLeave={this.hideControls}>
          {showControls
            ? <FaMinusCircle
              onClick={this.deleteTask}
              style={deleteStyle}
              role='button' /> : ''}
          {task.name}
        </li>
      </div>
    )
  }
}

export default Task
