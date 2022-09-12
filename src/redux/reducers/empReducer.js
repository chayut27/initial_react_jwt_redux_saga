import { EMP_REQ, EMP_FETCHING, EMP_SUCCESS, EMP_FAILED } from "../actionTypes"

const initialState = {
    emps: [],
    isFetching: false,
    isFailed: false,
    message: null
}

function empReducer(state = initialState, { type, payload }) {
    switch (type) {
        case EMP_FETCHING:
            return { ...state, emps: [], isFetching: true, isFailed: false, message: null }
        case EMP_SUCCESS:
            return { ...state, emps: payload, isFetching: false }
        case EMP_FAILED:
            return { ...state, emps: [], isFetching: false, isFailed: true, message: null }
        default:
            return state
    }
}

export default empReducer