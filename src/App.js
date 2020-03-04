import React from 'react';
import './App.css';
import {Game} from "./pages/Game";
import ToDoList from "./pages/toDoList";
import {Provider} from "react-redux";
import store from './store/index'


function App() {
  return (
    <div className="App">
       {/*<Game />*/}
        <Provider store={store}>
            <ToDoList />
        </Provider>
    </div>
  );
}

export default App;
