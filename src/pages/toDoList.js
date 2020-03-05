import React from 'react';
import store from '../store/index'
import {
    Input,
    Button,
    List,
    Typography
} from 'antd'

import {addList, changeValue,initList} from "../store/action";

import {getList} from '../api/List-type'
import {connect} from "react-redux";

class ToDoList extends React.Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     ...store.getState()
        // };
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                ...store.getState()
            })
        })
    }
    componentDidMount() {
        /*getList(1, 10).then(res => {
            store.dispatch(initList(res.data.rows))
        })*/
        this.props.dispatchInitList();
        //路由获取参数
        console.log(this.props.match.params)
    }

    handleChange(e) {
        store.dispatch(changeValue(e.target.value))
    }

    handleSubmit() {
        store.dispatch(addList(this.props.value));
    }
    toJump(){
        this.props.history.push('/game')
    }
    render() {
        return (
            <div style={{padding:'10px'}}>
                <button onClick={this.toJump.bind(this)}>跳转到game</button>
                <div>
                    <Input style={{width:'250px'}}
                           placeholder="请输入待办事项"
                           value={this.props.value} onChange={this.handleChange.bind(this)}
                    />
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>添加</Button>
                </div>
                <List style={{width:'250px',marginTop:'10px'}}
                      bordered
                      dataSource={this.props.list}
                      renderItem={item => (
                          <List.Item>
                              <Typography.Text mark>[待办]</Typography.Text> {item.title}
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

const mapStateToProps = (state) => {
    return {
        value: state.value,
        list: state.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchInitList() {
            dispatch(initList());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

//相当于
// ToDoList = connect(mapStateToProps,mapDispatchToProps )(ToDoList);
// export default ToDoList;
