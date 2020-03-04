import React from 'react';
import {BroadRow} from '../components/BroadRow'

class Broad extends React.Component{
    render() {
        const checkerboard = new Array(15).fill(0);
        return(
            <div className='Broad-box'>
                {
                    checkerboard.map((row,index) => {
                        return <BroadRow key={index} />
                    })
                }
            </div>
        )
    }
}

export {Broad};