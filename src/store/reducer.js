import {deepCopy} from "../utils/func";
import {ADD_LIST, CHANGE_VALUE} from "../constants/action-type";

const defaultState = {
    value: "待办",
    list: [
        "喝水",
        "写作业"
    ]
};

function reducer(state = defaultState, action) {
    const newState = deepCopy(state);
    switch (action.type) {
        case CHANGE_VALUE:
            newState.value = action.value;
            return newState;
        case ADD_LIST:
            newState.list.push(action.value);
            newState.value = '';
            return newState;
        default:
            return state
    }

}

export default reducer;