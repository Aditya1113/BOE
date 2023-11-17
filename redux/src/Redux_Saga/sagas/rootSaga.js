import { takeEvery } from "redux-saga/effects";
import { GET_USERS_START } from "../actionType";
import { getUsersHandler } from "../handle/getUsers"


export function* watcherSaga(){
    yield takeEvery(GET_USERS_START,getUsersHandler)
}
