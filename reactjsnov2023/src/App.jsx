import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Person from "./Components/Person";
import Student from "./Components/Student";
import MovieComp from "./Components/MovieComp";
import People from "./Components/People";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

const App = () => {
  const personInfo = {
    email: "peter@gmail.com",
    fullname: "Peter Parker",
  };

  const StudentDetails = [
    {id:1001,name:'Rose',gender:'Female'},
    {id:1002,name:'Peter',gender:'Male'},
    {id:1003,name:'John',gender:'Male'},
    {id:1004,name:'Kerry',gender:'Female'},
  ]

  return (
    <div className="App">
      {/* <Header name="Peter Parker" age={24} isAdmin={false} />
      <Header name="Rose Dawson" />
      <Header name="Kerry Smith" age={37} />

      <Person personDetails={personInfo} />

      <Student students={StudentDetails}/>
      <MovieComp/> */}
      {/* <People/> */}
      {/* <Form/> */}
      <TodoList/>

    </div>
  );
};

export default App;
