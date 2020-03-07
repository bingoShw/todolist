import React from 'react';
import PropTypes from 'prop-types';
import {BroadCol} from '../components/BroadCol'

class BroadRow extends React.Component{
    static propTypes = {
        onColClick:PropTypes.func
    };
    handleColClick(row, col){
        this.props.onColClick(row, col)
    }
    render() {
        const {cols,row} = this.props;
        return(
            <div className="BoardRow-box">
                {
                    cols.map((item,index) => {
                        return <BroadCol key={index} onColClick={this.handleColClick.bind(this)} value={item} row={row} col={index}/>
                    })
                }
            </div>
        )
    }
}

export {BroadRow};