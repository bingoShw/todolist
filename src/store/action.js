import {ADD_LIST, CHANGE_VALUE} from "../constants/action-type";

function changeValue(value, name, age) {
    return {
        type: CHANGE_VALUE,
        value: value,
        name,
        age
    }
}

function addList(value) {
    return {
        type: ADD_LIST,
        value
    }
}

export {
    changeValue,
    addList
}