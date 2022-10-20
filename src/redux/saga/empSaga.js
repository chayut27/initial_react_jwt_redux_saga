import { call, put, delay } from 'redux-saga/effects'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))
import axios from '../../utils/httpAxios'

export function* EmpSaga() {
    try {
        yield put({ type: 'EMP_FETCHING' });
        const response = yield call(axios.get, 'users')
        yield put({ type: 'EMP_SUCCESS', payload: response.data });
    } catch (e) {
        console.log(e.message)
        yield put({ type: 'EMP_FAILED' });

    }
}