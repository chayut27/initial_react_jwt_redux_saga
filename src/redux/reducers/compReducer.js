import { COMP_REQ, COMP_FETCHING, COMP_SUCCESS } from "../actionTypes"

const initialState = {
    emps: [],
    isFetching: false,
    isFailed: false,
    message: null
}

function compReducer(state = initialState, { type, payload }) {
    switch (type) {
        case COMP_FETCHING:
            return { ...state, emps: [], isFetching: true, isFailed: false, message: null }
        case COMP_SUCCESS:
            return { ...state, emps: payload, isFetching: false }
        default:
            return state
    }
}

export default compReducer