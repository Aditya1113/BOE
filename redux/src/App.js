import React from "react";
import { Provider } from "react-redux";
import CakeContainer from "./Cake/CakeContainer";
import TestContainer from "./Cake/TestContainer";
import store from "./Store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer />
        {/* <br/> */}
        {/* <TestContainer/> */}
      </Provider>
    </div>
  );
};

export default App;
