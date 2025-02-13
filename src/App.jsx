import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
    
    const [tasks, setTask] = useState([]);

    const addTask = (task) => {
        setTask([...tasks, task]);
    }
    
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
            <h1 className='font-3xl font-bold text-blue-500 mb-4'>My Tasks</h1>
            <TodoInput addTask={addTask}/>
            <TodoList tasks={tasks} />
        </div>
    )
  
}

export default App
