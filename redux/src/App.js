import React from "react";
import { Provider } from "react-redux";


import User_Saga from "./Redux_Saga/User_Saga";
import store from "./store";



const App = () => {
  return (
    
      <Provider store={store}>
        {/* <CakeContainer />
        <IceCreamContainer/> */}
        {/* <br/> */}
        {/* <TestContainer/> */}
        <User_Saga/>
      </Provider>

  );
};

export default App;
