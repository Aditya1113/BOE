import { BUY_CAKE, BUY_CANDLE } from "./cakeActionType"

export const buyCake = (qty)=>{
    return {
        type : BUY_CAKE,
        payload : qty
    }
}


export const buyCandle = ()=>{
    return {
        type : BUY_CANDLE
    }
}

