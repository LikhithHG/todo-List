import { Check, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const TodoList = ({ tasks, removeTask, editTask }) => {

    //state to track which task is being edited
    const [editIndex, setEditIndex] = useState(null);
    //To store the edited Test
    const [editedText, setEditedText] = useState('');

    return (
        <ul className="mt-2 w-1/2">
            {tasks.map((task, index) => {

                const isEditing = editIndex === index;

                return (
                    <li 
                        key={index} 
                        className="bg-white shadow-md p-3 my-2 rounded-lg flex justify-between"
                    >
                        {/** If you are editing show the input field or else show the text */}
                        {isEditing ? (
                            <input
                                type="text"
                                className="border border-gray-300 p-1 rounded w-full"
                                value={editedText}
                                onChange={(e) => setEditedText(e.target.value)}
                            >
                            </input>
                        ) : (
                            <span>
                                {task}
                            </span>
                        )}
                        
                        <div
                            className="flex gap-4"
                        >
                            {/**Edit Button Toggles between edit and save */}
                            <button 
                                className={isEditing ?  "text-green-500 hover:text-green-700" : "text-blue-500 hover:text-blue-700"}
                                onClick={() => {
                                    if(isEditing)
                                    {
                                        editTask(index, editedText);//save changes
                                        setEditIndex(null);//exit edit mode
                                    }
                                    else
                                    {
                                        setEditIndex(index); //Edit Mode
                                        setEditedText(task); //Prefil with the previous text
                                    }
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
            })}
        </ul>
    )
}

export default TodoList;