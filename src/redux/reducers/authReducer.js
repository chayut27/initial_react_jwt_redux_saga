import { LOGIN, LOGIN_FETCHING, LOGOUT, SET_CURRENT_USER, LOGIN_FAILED } from "../actionTypes"

const initialState = {
    currentUser: null,
    isFetching: false,
    isLoggedIn: false,
    isFailed: false,
    message: null
}

function authReducer(state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN_FETCHING:
            return { ...state, user: payload, isFetching: true, isFailed: false, message: null }
        case SET_CURRENT_USER:
            return { ...state, isFetching: false, isLoggedIn: true }
        case LOGIN_FAILED:
            return { ...state, isFetching: false, isFailed: true, message: payload }
        case LOGOUT:
            return { ...state, isLoggedIn: false }
        default:
            return state
    }
}

export default authReducer