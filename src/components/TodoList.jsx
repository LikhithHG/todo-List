import TodoItem from "./TodoItem";

const TodoList = ({ tasks, removeTask, editTask, updatePriority }) => {

    return (
        <ul className="mt-2 w-1/2">
            {tasks.map((taskObj, index) => (
                <TodoItem 
                    key = {index}
                    task = {taskObj}
                    index={index}
                    removeTask = {removeTask}
                    editTask = {editTask}
                    updatePriority = {updatePriority}
                />
            ))}
        </ul>
    )
}

export default TodoList;