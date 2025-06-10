import React, { useState } from 'react'

const Addtodo = ({ todosData, setTodosData }) => {
     const [task, setTask] = useState("");

     const addTask = (task) =>
     {
        const newTodo = {
            id:Date.now(),
            todo: task,
            completed: false,
            userId:1
        }
        setTodosData((prev)=> ({
            ...prev,
            todos: [newTodo,...prev.todos],
            total:todosData.total+1
        }))
     }
    return (
        <>
            <div className='sticky top-0 bg-gray-100 z-10 pb-4'>
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="text"
                        name='addtask'
                        placeholder='Enter task'
                        className="border-2 rounded-md h-10 w-full px-2"
                        onChange={e => setTask(e.target.value)}
                    />
                    <button
                        type="submit"
                        className='border-2 border-blue-600 rounded-4xl p-2 h-10 w-full sm:w-20 text-center'
                        onClick={() => addTask(task)}
                    >
                        Add
                    </button>
                </div>
            </div>
        </>
    )
}

export default Addtodo