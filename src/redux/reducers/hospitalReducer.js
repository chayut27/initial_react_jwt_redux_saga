import { HOSPITAL_REQ, HOSPITAL_FETCHING, HOSPITAL_SUCCESS } from "../actionTypes"

const initialState = {
    emps: [],
    isFetching: false,
    isFailed: false,
    message: null
}

function hospitalReducer(state = initialState, { type, payload }) {
    switch (type) {
        case HOSPITAL_FETCHING:
            return { ...state, emps: [], isFetching: true, isFailed: false, message: null }
        case HOSPITAL_SUCCESS:
            return { ...state, emps: payload, isFetching: false }
        default:
            return state
    }
}

export default hospitalReducer