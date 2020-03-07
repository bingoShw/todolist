import React from 'react';
import {ControlArea} from "../components/ControlArea";
import {BroadArea} from "../components/BroadArea";
import {deepCopy} from "../utils/func";
import {BLACK_CHESS, WHITE_CHESS} from '../constants/checkerboard'
import isSuccess from '../utils/success'
import {message,Modal} from 'antd'

class Game extends React.Component{
    constructor(props){
        super(props);
        const checkerboard = new Array(15).fill(new Array(15).fill(0));
        this.state = {
            checkerboard,
            isBlack: true,
            isFinish:false,
            // visible: false
        };
        this.records = [];
    }

    // handleCancel = e => {
    //     this.setState({
    //         visible: false,
    //     });
    // };

    handleColClick(row,col){
        const state = deepCopy(this.state);
        if (state.isFinish){
            return
        } else {
            state.checkerboard[row][col] = state.isBlack ? BLACK_CHESS : WHITE_CHESS;
            if (isSuccess(state.checkerboard,row,col)) {
                message.info(`${state.isBlack ? '黑棋' : '白棋'}胜利啦！！！`);
                // this.setState({
                //     visible: true,
                // });
                state.isFinish = true
            }
            this.records.push(this.state);
            this.setState({
                checkerboard: state.checkerboard,
                isBlack: !state.isBlack,
                isFinish: state.isFinish
            })
        }
    }

    //重新开始
    handleReset(){
        //全部初始化
        const checkerboard = new Array(15).fill(new Array(15).fill(0));
        this.setState({
            checkerboard,
            isBlack: true,
            isFinish: false,
            visible: false,
        });
        this.records = [];
    }

    //悔棋
    handleRegret(){
        //深拷贝上一步操作和之前的数据
        const state = deepCopy(this.records.pop());
        // console.log(state)
        this.setState(state)
    }

    render() {
        return(
            <div style={{width:'100%',height:'min-hight',background:'rgb(230, 230, 230)',padding:'20px'}}>
                {/*<Modal*/}
                {/*    title="恭喜恭喜✿✿ヽ(°▽°)ノ✿"*/}
                {/*    visible={this.state.visible}*/}
                {/*    onOk={this.handleReset.bind(this)}*/}
                {/*    okText='再来一局'*/}
                {/*    cancelText='查看棋局'*/}
                {/*    onCancel={this.handleCancel}*/}
                {/*>*/}
                {/*    <p>{this.state.isBlack ? '黑棋' : '白棋'}胜利啦！！！</p>*/}
                {/*</Modal>*/}
                <ControlArea onReset={this.handleReset.bind(this)} onRegret={this.handleRegret.bind(this)}/>
                <BroadArea onColClick={this.handleColClick.bind(this)} checkerboard={this.state.checkerboard}/>
            </div>
        )
    }
}

export {Game};
