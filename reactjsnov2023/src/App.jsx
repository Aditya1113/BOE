//rafce

import './App.css'
import React from "react";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
   <Header name="Peter Parker" age={24}/>
   <Header name="Rose Dawson" age={48}/>
   <Header name="Kerry Smith" age={37}/>
   </div>
  );
};

export default App;
