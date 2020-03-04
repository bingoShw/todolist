import {createStore,applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),
));

export default store;

