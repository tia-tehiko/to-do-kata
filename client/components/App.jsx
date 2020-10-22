import React from 'react'

const tasks = [
  { id: 1, name: 'update portfolio' },
  { id: 2, name: 'apply for jobs' },
  { id: 3, name: 'get new car' }
]

const App = () => {
  return (
    <>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.name}</li>)}
      </ul>

    </>
  )
}

export default App
