//rafce

import './App.css'
import React from "react";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
   <Header name="Peter Parker" age={24} isAdmin={true}/>
   <Header name="Rose Dawson" age={48} isAdmin={false}/>
   <Header name="Kerry Smith" age={37} isAdmin={true}/>
   </div>
  );
};

export default App;
