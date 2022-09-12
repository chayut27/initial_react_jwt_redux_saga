import { WORK_TIME_REQ, WORK_TIME_FETCHING, WORK_TIME_SUCCESS } from "../actionTypes"

const initialState = {
    emps: [],
    isFetching: false,
    isFailed: false,
    message: null
}

function workTimeReducer(state = initialState, { type, payload }) {
    switch (type) {
        case WORK_TIME_FETCHING:
            return { ...state, emps: [], isFetching: true, isFailed: false, message: null }
        case WORK_TIME_SUCCESS:
            return { ...state, emps: payload, isFetching: false }
        default:
            return state
    }
}

export default workTimeReducer