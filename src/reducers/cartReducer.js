import {ADD_TO_CART, REMOVE_TO_CART, CLEAR_CART} from '../types/index';

const initialState = [];

export default function cartReducer(state = initialState, action){
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                {
                    ...action.payload
                }
            ]

        case CLEAR_CART:
            return []
            
        default:
            return [
                ...state
            ]
    }
};