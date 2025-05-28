import { useState } from 'react'
import Todo from './components/Todo'
import Addtodo from './components/Addtodo'

let nextId = 1

function App() {

  const [todos, setTodos] = useState([{ id: 0, task: "To create todo app" }])

  const addTask = (task) => {
    console.log("task:", task)
    setTodos([...todos, { id: nextId++, task: task }])
    console.log("todos:", todos)
    setTask("")
  }
  return (
    <>
    <div className='h-screen flex items-center flex-col justify-center'>
      <Addtodo addTask={addTask}/>
      <Todo todos={todos} />
    </div>
    </>
  )
}

export default App
