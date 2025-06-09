import React from 'react'

const Deletetodo = ({id, setTodosData}) => {
    const deleteTask = (id) =>{
        setTodosData((prev)=> ({...prev,
            todos:prev.todos.filter(todo => todo.id!==id),
        }))
    }
    return (
    <>
    <button
      onClick={() => deleteTask(id)}
      className="text-lg hover:scale-110 hover:cursor-pointer transition"
      title="Delete"
    >
      🗑️
    </button></>
  )
}

export default Deletetodo