import { useState } from 'react'
import Todo from './components/Todo'


function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([{}])
  return (
    <>
     <Todo/>
    </>
  )
}

export default App
