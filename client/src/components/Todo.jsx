import React from 'react'

const Todo = ({todos}) => {
  return (
    <>
      <div className='flex justify-center m-5'>
        <ul className='border-2 rounded-lg list-none'>
          {todos.map((todo) =>
            <li key={todo.id} className='flex p-2 border-l-4 bg-[#f9f9f9] border-l-blue-800 m-2 md:w-100 tarnsition delay-150 duration-300 ease-in-out hover:bg-[#f1f1f1] sm:w-50 '>{todo.task}</li>
          )
          }
        </ul>
      </div>
    </>
  )
}

export default Todo