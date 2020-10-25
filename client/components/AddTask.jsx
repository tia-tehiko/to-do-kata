import React from 'react'
import { connect } from 'react-redux'

import { addTask, fetchTasks } from '../api'
import { setTasks } from '../actions'

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
      .then(() => {
        return fetchTasks()
      })
      .then((tasks) => {
        this.props.dispatch(setTasks(tasks))
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        <h1>New Task</h1>
        <input name="name" onChange={this.handleChange} />
        <button onClick={this.submit}>Add New Task</button>
      </div>
    )
  }
}

export default connect()(AddTask)
