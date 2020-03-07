import React from 'react';
import PropTypes from 'prop-types';
import {BLACK_CHESS, SPACE} from "../constants/checkerboard";

class BroadCol extends React.Component{
    static propTypes = {
        onColClick:PropTypes.func
    };
    handleColClick(){
        const {row, col,value} = this.props;
        if (value === SPACE){
            this.props.onColClick(row, col);
        }
    }
    render() {
        const {row, col,value} = this.props;
        let rowStyle = {};
        let colStyle = {};
        //第一行
        if (row === 0) {
            colStyle = {
                height: '50%',
                top: '50%'
            }
        }
        // 最后一行
        if (row === 14) {
            colStyle = {
                height: '50%',
                top:0
            }
        }
        // 第一列
        if (col === 0) {
            rowStyle = {
                width: '50%',
                left: '50%'
            }
        }
        // 最后一列
        if (col === 14) {
            rowStyle = {
                width: '50%',
                left:0
            }
        }
        return(
            <div className='BoardCol-box' onClick={this.handleColClick.bind(this)}>
                <div style={rowStyle} className="BoardCol-row"></div>
                <div style={colStyle} className="BoardCol-col"></div>
                {
                    value !== SPACE &&
                    <div style={{background:value===BLACK_CHESS?'black':'white'}} className='checkerboard' />
                }
            </div>
        )
    }
}

export {BroadCol};