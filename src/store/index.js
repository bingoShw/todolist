import {createStore,applyMiddleware } from "redux";
// import reducer from "./reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {todolistReducer} from "../reducer/todolistReducer";

// const store = createStore(hello, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(todolistReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

export default store;

