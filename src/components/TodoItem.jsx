import { useEffect, useState } from "react";
import { Check, Pencil, Trash2 } from "lucide-react";

const TodoItem = ({ task, index, removeTask, editTask, updatePriority }) => {
    //state to track which task is being edited
    const [isEditing, setIsEditing] = useState(false);
    //To store the edited Test
    const [editedText, setEditedText] = useState(task.text);
    //To mark the task as complete or not complete
    const [isCompleted, setIsCompleted] = useState(false);
    //To reset the priority of the task
    const [priority, setPriority] = useState(task.priority);
    //New state for checking priority dropdown
    const [isPriorityEditing, setIsPriorityEditing] = useState(false);

    //Reset Edited text when prop updates (new task is added)
    useEffect(() => {
        setEditedText(task.text);
        setPriority(task.priority);
        setIsCompleted(false);

    }, [task]);

    const toggleComplete = () => {
        setIsCompleted(!isCompleted);
    }

    return (
        <li
            className={`bg-white shadow-md p-3 my-2 rounded-lg flex justify-between items-center group transition-all duration-300 hover:shadow-lg ${
                isCompleted ? "opacity-70" : ""
            }`}
        >
            <div className="flex items-center gap-3 w-full">
                {/** Check box to mark the item as completed */}
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={toggleComplete}
                    className="h-5 w-5 accent-green-500 cursor-pointer"
                />
                {isEditing ? (
                    <input
                        type="text"
                        className="border border-gray-400 p-1 rounded w-full"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                ) : (
                    <span className={`${isCompleted ? "line-through text-gray-500" : ""}`}>
                        {task.text}
                    </span>
                )}
            </div>

            {/**Priority display and editing*/}
            <div className="flex items-center gap-3">
                {isPriorityEditing ? (
                    <select
                        value={priority}
                        onChange={(e) => {
                            setPriority(e.target.value);
                            updatePriority(index, e.target.value);
                            setIsPriorityEditing(false); // Close dropdown after selection
                        }}
                        className="border border-gray-300 p-1 rounded text-sm cursor-pointer"
                        autoFocus // Automatically focus on dropdown when clicked
                        onBlur={() => setIsPriorityEditing(false)} // Close dropdown when it loses focus
                    >
                        <option value="High" className="text-red-500">High</option>
                        <option value="Medium" className="text-yellow-500">Medium</option>
                        <option value="Low" className="text-green-500">Low</option>
                    </select>
                ) : (
                    <span
                        onClick={() => setIsPriorityEditing(true)}
                        className={`px-2 py-1 rounded text-white text-xs cursor-pointer ${
                            priority === "High" ? "bg-red-500" :
                            priority === "Medium" ? "bg-yellow-500" :"bg-green-500"
                        }`}
                    >
                        {priority}
                    </span>
                )}
            </div>
            
            {/**Button Appear on Hover */}
            <div
                className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                {/**Edit Button Toggles between edit and save */}
                <button 
                    className={isEditing ?  "text-green-500 hover:text-green-700" : "text-blue-500 hover:text-blue-700"}
                    onClick={() => {
                        if(isEditing)
                            editTask(index, editedText);
                        setIsEditing(!isEditing);
                    }}
                >
                    {isEditing ? <Check size={20} /> : <Pencil size={20} />}
                </button>
                            
                <button 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeTask(index)}
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </li>
    )
}

export default TodoItem;