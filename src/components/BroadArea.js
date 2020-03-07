import React from 'react';
import PropTypes from 'prop-types';
import {Broad} from '../components/Broad'

class BroadArea extends React.Component{
    static propTypes = {
        onColClick:PropTypes.func
    };
    handleColClick(row, col){
        this.props.onColClick(row, col);
    }
    render() {
        return(
            <div className='BroadArea-box'>
                <Broad checkerboard={this.props.checkerboard} onColClick={this.handleColClick.bind(this)}/>
            </div>
        )
    }
}

export {BroadArea};