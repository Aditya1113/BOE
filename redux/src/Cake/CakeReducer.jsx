import { BUY_CAKE } from "./cakeActionType"


export const inititalState = {
    numberOfCakes : 60
}

const cakeReducer = (state=inititalState,action)=>{
        switch(action.type){

                case BUY_CAKE:
                    return {
                        numberOfCakes : state.numberOfCakes - 1
                    }

                default :
                return state

        }
}

export default cakeReducer