import React from 'react';
import {BroadRow} from '../components/BroadRow'
import PropTypes from 'prop-types';

class Broad extends React.Component{
    static propTypes = {
        onColClick:PropTypes.func
    };
    handleColClick(row, col){
        this.props.onColClick(row, col);
    }
    render() {
        const {checkerboard} = this.props;
        return(
            <div className='Broad-box'>
                {
                    checkerboard.map((item,index) => {
                        return <BroadRow key={index} onColClick={this.handleColClick.bind(this)} cols={item} row={index}/>
                    })
                }
            </div>
        )
    }
}

export {Broad};