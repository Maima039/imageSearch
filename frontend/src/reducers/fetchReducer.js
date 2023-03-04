import {actionType} from "../helper";

const initialState={
    list: null,
    param:null
}

export const fetchReducer = (state = initialState, action) => {


    switch (action.type){
        case actionType.FETCH_PARAM:
            return {...state, param:action?.payload}
        case actionType.FETCH_IMAGE:
            return {...state, list : action?.payload}

        default: return state
    }
}