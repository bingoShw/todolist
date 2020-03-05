import React from 'react';
import './App.css';
import {Game} from "./pages/Game";
import ToDoList from "./pages/toDoList";
import {Provider} from "react-redux";
import store from './store/index'
import {
    BrowserRouter,
    HashRouter,
    Switch,
    Route,
    Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Provider store={store}>
                <Link to='/game'>game</Link>
                <br/>
                <Link to='/ToDoList/:12315'>ToDoList</Link>
                <Switch>
                    {/*<Game />*/}
                    {/*<ToDoList />*/}
                    <Route path='/game' component={Game} />
                    <Route path='/ToDoList/:id' component={ToDoList} />
                </Switch>
            </Provider>
        </BrowserRouter>

    </div>
  );
}

export default App;
