// import { applyMiddleware, legacy_createStore as createStore} from 'redux'
// import logger from 'redux-logger';

// import RootReducer from './RootReducer';

// const store = createStore(RootReducer,applyMiddleware(logger))

// export default store


//Saga Configuration

import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger';

import RootReducer from './RootReducer';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer,applyMiddleware(logger,sagaMiddleware))

export default store