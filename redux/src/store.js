// --Saga Configuration

import { legacy_createStore as createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./Redux_Saga/sagas/rootSaga";
import userReducer from "./Redux_Saga/reducers/userReducer";


const sagaMiddlware = createSagaMiddleware();
const middleware = [sagaMiddlware];

const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddlware.run(watcherSaga);

export default store;
