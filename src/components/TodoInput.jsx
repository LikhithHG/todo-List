import { useState } from "react";

const TodoInput = ({addTask}) => {
    const [task, setTask] = useState("");

    const handleAdd = () => {
        //Ignore the empty task
        if(task.trim() === '')
            return;
        addTask(task);
        setTask("");//clear the input task after the task is being added
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