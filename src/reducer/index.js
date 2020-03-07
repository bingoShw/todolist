import {combineReducers} from "redux";
import {helloReducer} from "../reducer/helloReducer";
import {todolistReducer} from "../reducer/todolistReducer";

export default combineReducers({
    helloReducer,
    todolistReducer
})