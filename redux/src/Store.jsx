import { legacy_createStore as createStore} from 'redux'
import cakeReducer from "./Cake/CakeReducer";
import IceCreamReducer from './Cake/IceCream/IceCreamReducer';
import RootReducer from './RootReducer';

const store = createStore(RootReducer)

export default store