import { useEffect, useState } from 'react'
import Todo from './components/Todo'
import Addtodo from './components/Addtodo'

let nextId = 1

function App() {



  const [todosData, setTodosData] = useState({
    todos: [],
    total: 0,
    skip: 0,
    limit: 0,
  })

  useEffect(() => {
    fetch('https://dummyjson.com/todos?')
      .then(res => res.json())
      .then((data) => setTodosData(data))
      .catch((err) => console.log(err))
  }, [])


  return (
    <>
      <div className='min-h-screen w-full bg-gray-100 flex justify-center items-start'>
        <div className="w-full max-w-xl p-4">
          <Addtodo todosData={todosData} setTodosData={setTodosData} />
          <Todo todosData={todosData} setTodosData={setTodosData} />
        </div>
      </div>
    </>
  )
}

export default App
