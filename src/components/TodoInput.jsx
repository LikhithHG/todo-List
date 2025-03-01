import { useState } from "react";

const TodoInput = ({addTask}) => {
    const [task, setTask] = useState("");
    //Priority for the task
    const [priority, setPriority] = useState('Medium');//Default medium priority

    const handleAdd = () => {
        //Ignore the empty task
        if(task.trim() === '')
            return;
        addTask({text: task, priority}); //Send the task as an object with riority
        setTask("");//clear the input task after the task is being added
        setPriority("Medium");//Reset priority to Medium
    }

    return (
        <div className="flex gap-2">
            <input 
                className="border border-gray-500 p-2 rounded-lg outline-none w-96 max-x-full"
                type="text"
                placeholder="Enter the task to be added..."
                value = {task}
                onChange={(e) => setTask(e.target.value)}
            />

            {/**Priority Selection*/}
            <select
                value = {priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg text-sm cursor-pointer"
            >
                <option value='High' className="text-red-500">HIGH</option>
                <option value='Medium' className="text-yellow-500">MEDIUM</option>
                <option value='Low' className="text-green-500">LOW</option>
            </select>

            {/**Add Button*/}
            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={handleAdd}
            >
                Add Task
            </button>
        </div>
    )
}

export default TodoInput;