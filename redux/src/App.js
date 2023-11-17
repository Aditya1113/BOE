import React from "react";
import { Provider } from "react-redux";
import CakeContainer from "./Cake/CakeContainer";
import IceCreamContainer from "./Cake/IceCream/IceCreamContainer";
import store from "./Store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer />
        <IceCreamContainer/>
        {/* <br/> */}
        {/* <TestContainer/> */}
      </Provider>
    </div>
  );
};

export default App;
