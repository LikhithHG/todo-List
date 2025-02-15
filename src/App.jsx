import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
    
    const [tasks, setTasks] = useState([]);

    //Function to add Task
    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    //Function to Remove Task
    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    //Function to edit Task
    const editTask = (index, newText) => {
        if(newText.trim() === '')//prevent empty edits because it will return early without changing state variables
            return;
        const updatedTasks = [...tasks];
        updatedTasks[index] = newText;
        setTasks(updatedTasks);
    }
    
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
            <h1 className='font-3xl font-bold text-blue-500 mb-4'>My Tasks</h1>
            <TodoInput addTask={addTask}/>
            <TodoList tasks={tasks} removeTask = {removeTask} editTask={editTask}/>
        </div>
    )
  
}

export default App
