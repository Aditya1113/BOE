// import { applyMiddleware, legacy_createStore as createStore} from 'redux'
// import logger from 'redux-logger';

// import RootReducer from './RootReducer';

// const store = createStore(RootReducer,applyMiddleware(logger))

// export default store


//Saga Configuration

import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension/';
// import logger from 'redux-logger';
import { watcherSaga } from './Redux_Saga/sagas/rootSaga';


import userReducer from './Redux_Saga/reducers/userReducer';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const store = createStore(userReducer,composeWithDevTools(applyMiddleware(...middleware)))

sagaMiddleware.run(watcherSaga)

export default store