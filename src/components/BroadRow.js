import React from 'react';

import {BroadCol} from '../components/BroadCol'

class BroadRow extends React.Component{
    render() {
        const checkerboard = new Array(15).fill(0);
        return(
            <div className="BoardRow-box">
                {
                    checkerboard.map((col,index) => {
                        return <BroadCol key={index}/>
                    })
                }
            </div>
        )
    }
}

export {BroadRow};