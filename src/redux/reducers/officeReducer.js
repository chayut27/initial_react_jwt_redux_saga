import { OFFICE_REQ, OFFICE_FETCHING, OFFICE_SUCCESS } from "../actionTypes"

const initialState = {
    emps: [],
    isFetching: false,
    isFailed: false,
    message: null
}

function officeReducer(state = initialState, { type, payload }) {
    switch (type) {
        case OFFICE_FETCHING:
            return { ...state, emps: [], isFetching: true, isFailed: false, message: null }
        case OFFICE_SUCCESS:
            return { ...state, emps: payload, isFetching: false }
        default:
            return state
    }
}

export default officeReducer