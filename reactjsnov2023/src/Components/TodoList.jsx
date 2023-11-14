import React, { useState } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([
    { title: "Walk the Dog", done: false }, //m
    { title: "Collect Tickets", done: true },
    { title: "Meeting at 5", done: false },
  ]);

  const toggleTodo = (todoToUpdate) => {
    //{title:'Walk the Dog',done:false},

    setTodoItems(
      todoItems.map((m) =>
        m.title === todoToUpdate.title ? { ...m, done: !m.done } : m
      )
      // m=  {title:'Walk the Dog',done:false},
    );
  };
  const createTableBody = () => {
    return todoItems.map((m, index) => (
      <tr key={index}>
        <td>{m.title}</td>
        <td>
        <p>
          <label>
            <input type="checkbox" onChange={()=>toggleTodo(m)} className="filled-in" checked={m.done}/>
            <span></span>
          </label>
        </p>
        </td>

        {/* <input type="checkbox" onChange={()=>toggleTodo(m)} checked='checked' className='filled-in'/> */}
      </tr>
    ));
  };
  return (
    <div className="container">
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
