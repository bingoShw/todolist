import React from 'react';

import {ControlArea} from "../components/ControlArea";
import {BroadArea} from "../components/BroadArea";

class Game extends React.Component{
    render() {
        return(
            <div style={{width:'100%',height:'min-hight',background:'rgb(230, 230, 230)',padding:'20px'}}>
                <ControlArea />
                <BroadArea />
            </div>
        )
    }
}

export {Game};
