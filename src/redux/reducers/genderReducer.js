import { GENDER_REQ, GENDER_FETCHING, GENDER_SUCCESS } from "../actionTypes"

const initialState = {
    emps: [],
    isFetching: false,
    isFailed: false,
    message: null
}

function genderReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GENDER_FETCHING:
            return { ...state, emps: [], isFetching: true, isFailed: false, message: null }
        case GENDER_SUCCESS:
            return { ...state, emps: payload, isFetching: false }
        default:
            return state
    }
}

export default genderReducer