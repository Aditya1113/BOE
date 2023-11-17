import { GET_USERS_FAILURE, GET_USERS_START, GET_USERS_SUCCESS } from "../actionType"

export const getUsers = ()=>{
    return {
        type : GET_USERS_START,
        
    }
}


export const getUsersSuccess= (payload)=>{
    return {
        type : GET_USERS_SUCCESS,
        payload : payload
        
    }
}

export const getUsersFailure = (payload)=>{
    return {
        type : GET_USERS_FAILURE,
        payload :payload
        
    }
}