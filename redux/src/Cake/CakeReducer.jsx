import { act } from "react-dom/test-utils"
import { BUY_CAKE, BUY_CANDLE } from "./cakeActionType"


export const inititalState = {
    numberOfCakes : 60,
    numberOfCandles: 40

}

const cakeReducer = (state=inititalState,action)=>{
        switch(action.type){

                case BUY_CAKE:
                    return {
                        ...state,
                        numberOfCakes : state.numberOfCakes - action.payload
                    }
                case BUY_CANDLE:
                    return {

                        ...state,
                        numberOfCandles : state.numberOfCandles - 1
                    }
    

                default :
                return state

        }
}

export default cakeReducer