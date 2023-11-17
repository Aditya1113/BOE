import { GET_USERS_FAILURE, GET_USERS_START, GET_USERS_SUCCESS } from "../actionType"

const initialState = {
    data : [],
    error : '',
    isLoading:false
}

const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case GET_USERS_START:
            return{
                ...state,
                isLoading:true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                data:action.payload,
                isLoading:false
            }

        case GET_USERS_FAILURE:
            return {
                ...state,
                error : action.payload,
                isLoading : false
            }
        default : return state
    }
}

export default userReducer