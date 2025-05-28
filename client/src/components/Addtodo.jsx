import React, { useState } from 'react'

const Addtodo = ({addTask}) => {
    const [task, setTask] = useState("")
    return (
        <>
            <div className='flex justify-center items-center '>
                <input
                    type="text"
                    name='addtask'
                    placeholder='Enter task'
                    className="border-2 rounded-md h-8 w-90"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit" className=' ml-1 border-2 border-blue-600 rounded-full p-1 h-8 w-20 text-center' onClick={()=>addTask(task)}>Add</button>
            </div>
        </>
    )
}

export default Addtodo