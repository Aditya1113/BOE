import React, { useState } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([
    { title: "Walk the Dog", done: false }, //m
    { title: "Collect Tickets", done: true },
    { title: "Meeting at 5", done: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const toggleTodo = (todoToUpdate) => {
    //{title:'Walk the Dog',done:false},

    setTodoItems(
      todoItems.map((m) =>
        m.title === todoToUpdate.title ? { ...m, done: !m.done } : m
      )
      // m=  {title:'Walk the Dog',done:false},
    );
  };

  const AddTodo = () => {
    console.log("inside add");

    const foundTodo = todoItems.find((item) => item.title.toLowerCase() === newTodo.toLowerCase());

    if (foundTodo) {
      alert("Oops Already There");
    } else {
      setTodoItems([...todoItems, { title: newTodo, done: false }]);
    }
  };
  const createTableBody = () => {
    return todoItems.map((m, index) => (
      <tr key={index}>
        <td>{m.title}</td>
        <td>
          <p>
            <label>
              <input
                type="checkbox"
                onChange={() => toggleTodo(m)}
                className="filled-in"
                checked={m.done}
              />
              <span></span>
            </label>
          </p>
        </td>

        {/* <input type="checkbox" onChange={()=>toggleTodo(m)} checked='checked' className='filled-in'/> */}
      </tr>
    ));
  };
  return (
    <div className="container s12">
      <div className="row">
        <div className="input-field col s6">
          <input
            id="newTodo"
            type="text"
            class="validate"
            onChange={(event) => setNewTodo(event.target.value)}
          />
          <label htmlFor="newTodo">Add new Todo</label>
        </div>
        <div className="col s6">
          <a className="waves-effect waves-light btn mt-3" onClick={AddTodo}>
            Add
          </a>
        </div>
      </div>
      <table border={1} className="striped">
        <thead>
          <tr>
            <th>Todo Items</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{createTableBody()}</tbody>
      </table>
    </div>
  );
};

export default TodoList;
