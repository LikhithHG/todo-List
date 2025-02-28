import TodoItem from "./TodoItem";

const TodoList = ({ tasks, removeTask, editTask }) => {

    return (
        <ul className="mt-2 w-1/2">
            {tasks.map((task, index) => (
                <TodoItem 
                    key = {index}
                    task = {task}
                    index={index}
                    removeTask = {removeTask}
                    editTask = {editTask}
                />
            ))}
        </ul>
    )
}

export default TodoList;