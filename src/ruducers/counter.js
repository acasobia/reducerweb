import * as types from '../actions/ActionTypes';

const initialstate ={
    number:0
};

export default function counter(state=initialstate, action){
    switch(action.type){
        case type.INCREMENT:
            return {
                ...state,
                number : state.number +1
            };
            case type.DECREMENT:
            return {
                ...state,
                number : state.number -1
             };
    default:
        return state;
    }        
}