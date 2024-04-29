import { useState } from "react";

export default function Todo() {

    let[todos,setTodos] = useState(["sample task"]);

    let[newTodo , setNewTodo] = useState("");

    let addNewTask = () => {
       setTodos([...todos, newTodo]);
       setNewTodo("");
    };



    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <input placeholder="add a task" 
            value={newTodo}
             onChange={updateTodo}/>
            <br /><br />
            <button onClick={addNewTask}>Add task</button>
            <br />
            <br /><br />

            <hr />
            <h3>Tasks Todo</h3>
            <ul>
                {
                    todos.map((todo) => {
                        return <li>{todo}</li>;
                    })
                }
            </ul>
        </div>
    );
}