import React from 'react'

import Tasks from './Tasks'
import AddTask from './AddTask'

class App extends React.Component {
  render () {
    return (
      <>
        <Tasks />
        <AddTask />
      </>
    )
  }
}

export default App
