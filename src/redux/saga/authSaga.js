import { call, put, delay } from 'redux-saga/effects'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))
import axios from '../../utils/httpAxios'

export function* LoginSaga({ payload }) {
    try {
        yield put({ type: 'LOGIN_FETCHING' });
        const response = yield call(axios.post, 'login', payload)

        if (response.data.result) {
            localStorage.setItem('accessToken', response.data.data.accessToken)
            localStorage.setItem('refreshToken', response.data.data.refreshToken)
            yield put({ type: 'SET_CURRENT_USER' });
        } else {
            yield put({ type: 'LOGIN_FAILED', payload: response.data.message.th });
        }

    } catch (e) {
        console.log(e.message)
    }
}