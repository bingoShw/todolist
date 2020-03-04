import React from 'react';
import store from '../store/index'
import {
    Input,
    Button,
    List,
    Typography
} from 'antd'

import {addList, changeValue} from "../store/action";

class ToDoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ...store.getState()
        };
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                ...store.getState()
            })
        })
    }
    handleChange(e) {
        store.dispatch(changeValue(e.target.value))
    }

    handleSubmit() {
        store.dispatch(addList(this.state.value));
    }
    render() {

        return (
            <div style={{padding:'10px'}}>
                <div>
                    <Input style={{width:'250px'}}
                           placeholder="请输入待办事项"
                           value={this.state.value} onChange={this.handleChange.bind(this)}
                    />
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>添加</Button>
                </div>
                <List style={{width:'250px',marginTop:'10px'}}
                      bordered
                      dataSource={this.state.list}
                      renderItem={item => (
                          <List.Item>
                              <Typography.Text mark>[待办]</Typography.Text> {item}
                          </List.Item>
                      )}
                />
            </div>
        );
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
}

export default ToDoList;

