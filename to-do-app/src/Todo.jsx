import { useState } from "react";

export default function Todo() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() === "") {
            alert("Please enter a task");
            return;
        }
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <div>
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodo}
            />
            <br />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <hr />
            <h3>Tasks Todo</h3>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
