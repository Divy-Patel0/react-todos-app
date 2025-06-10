import React from 'react'
import Deletetodo from './Deletetodo';

const Todo = ({ todosData, setTodosData }) => {

  const toggleTodo = async (id) => {
    const currentTodo = todosData.todos.find(todo => todo.id === id);
    const updatedStatus = !currentTodo.completed;

    setTodosData((prev) => ({
      ...prev,
      todos: prev.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: updatedStatus } : todo),
    }))
  }
  return (
    <>
      <ul className='rounded-3xl list-none p-2 sm:p-4'>
        {todosData.todos.map((todo) =>
          <li
            key={todo.id}
            className='flex flex-col sm:flex-row justify-between items-start sm:items-center w-full p-2 bg-[#f9f9f9] m-2 rounded-xl transition delay-150 duration-300 ease-in-out hover:bg-[#f1f1f1]'
          >
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.todo}
            </span>
            <div className='flex items-center gap-2 mt-2 sm:mt-0'>
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`ml-0 sm:ml-2 px-2 py-1 rounded hover:cursor-pointer ${todo.completed ? 'bg-green-600 text-white' : 'bg-gray-300'}`}
              >
                {todo.completed ? '✔️' : '❌'}
              </button>
              <Deletetodo id={todo.id} setTodosData={setTodosData} />
            </div>
          </li>
        )}
      </ul>
    </>
  )
}

export default Todo