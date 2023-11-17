import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import IceCreamReducer from "./Cake/IceCream/IceCreamReducer";

const RootReducer = combineReducers({
        cake : CakeReducer,
        ice : IceCreamReducer
})

export default RootReducer