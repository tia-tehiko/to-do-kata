import React from 'react'

const tasks = [
  { id: 1, name: 'update portfolio' },
  { id: 2, name: 'do washing' },
  { id: 3, name: 'ring mum' }
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
