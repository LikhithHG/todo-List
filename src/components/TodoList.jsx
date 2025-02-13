const TodoList = ({ tasks }) => {
    return (
        <ul className="mt-2 w-1/2">
            {tasks.map((task, index) => (
                <li key={index} className="bg-white shadow-md p-3 my-2 rounded-lg">
                    {task}
                </li>
            ))}
        </ul>
    )
}

export default TodoList;