import React from 'react'
import { connect } from 'react-redux'

export class App extends React.Component {
  render() {
    let { tasks } = this.props
    return (
      <>
        <h1>Tasks</h1>
        <ul>
          {tasks.map(task => <li key={task.id}>{task.name}</li>)}
        </ul>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App)
