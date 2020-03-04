import {createStore} from "redux";
import reducer from "./reducer";

// 第一个参数是reducer的参数
// 第二个参数是redux的一些配置
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

