import {CHANGE_VALUE, ADD_LIST,INIT_LIST} from "../constants/action-type";

import {getList} from '../api/List-type'


function changeValue(value) {
    return {
        type: CHANGE_VALUE,
        value
    }
}

function addList(title) {
    return {
        type: ADD_LIST,
        value:{title}
    }
}

/*function initList(value) {
    return {
        type: INIT_LIST,
        value
    }
}*/

const initList = () => {
    return (dispatch) => {
        getList(1, 10).then(res => {
            dispatch({
                type: INIT_LIST,
                value: res.data.rows
            });
        });
    };
};


export {
    changeValue,
    addList,
    initList
}

