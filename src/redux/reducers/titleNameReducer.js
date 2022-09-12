import { TITLE_NAME_REQ, TITLE_NAME_FETCHING, TITLE_NAME_SUCCESS } from "../actionTypes"

const initialState = {
    emps: [],
    isFetching: false,
    isFailed: false,
    message: null
}

function titleNameReducer(state = initialState, { type, payload }) {
    switch (type) {
        case TITLE_NAME_FETCHING:
            return { ...state, emps: [], isFetching: true, isFailed: false, message: null }
        case TITLE_NAME_SUCCESS:
            return { ...state, emps: payload, isFetching: false }
        default:
            return state
    }
}

export default titleNameReducer