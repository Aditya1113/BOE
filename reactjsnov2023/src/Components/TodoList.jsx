import React, { useState } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([
    { title: "Walk the Dog", done: false }, //m
    { title: "Collect Tickets", done: true },
    { title: "Meeting at 5", done: false },
  ]);

  const [newTodo, setNewTodo] = useState({});

  const [showCompleted, setShowCompleted] = useState(false);

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

    const foundTodo = todoItems.find(
      (item) => item.title.toLowerCase() === newTodo.toLowerCase()
    );

    if (foundTodo) {
      alert("Oops Already There");
    } else {
      setTodoItems([...todoItems, { title: newTodo, done: false }]);
    }
  };
  const createTableBody = (doneValue) => {
    return todoItems
      .filter((item) => item.done === doneValue)
      .map((m, index) => (
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
        <div className="input-field col s4">
          <input
            id="newTodo"
            type="text"
            class="validate"
            onChange={(event) => setNewTodo(event.target.value)}
          />
          <label htmlFor="newTodo">Add new Todo</label>
        </div>

        <button className="waves-effect waves-light btn m" onClick={AddTodo}>
          Add
        </button>
      </div>
      <table border={1} className="striped">
        <thead>
          <tr>
            <th>Todo Items</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{createTableBody(false)}</tbody>
      </table>
      <button
        onClick={() => setShowCompleted(!showCompleted)}
        className="waves-effect waves-light btn red"
      >
        Show Completed Tasks
      </button>

      {showCompleted ? (
        <table border={1} className="striped">
          <thead>
            <tr>
              <th>Todo Items</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{createTableBody(true)}</tbody>
        </table>
      ) :null}
    </div>
  );
};

export default TodoList;
