import * as types from 'redux/types'
import * as action from 'redux/actions'

const initialState = {
    isOpen: false,
}

export default function BreakpointReducer(state = initialState, action) {
    switch (action.type) {
        case action.type:
            return {
                ...state,
                isOpen: action.payload,
            }
        default:
            return state
    }
}
