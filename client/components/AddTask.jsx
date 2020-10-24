import React from 'react'
import { connect } from 'react-redux'

import { addTask } from '../api'

class AddTask extends React.Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = () => {
    addTask(this.state.name)
  }

  render() {
    return (
      <div>
        <h1>Add New Task</h1>
        <input name="name" onChange={this.handleChange} />
        <button onClick={this.submit}>Create Task</button>
      </div>
    )
  }
}

export default AddTask
