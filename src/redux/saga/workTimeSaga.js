import { call, put, delay } from 'redux-saga/effects'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))
import axios from '../../utils/httpAxios'

export function* WorkTimeSaga() {
    try {
        yield put({ type: 'WORK_TIME_FETCHING' });
        const response = yield call(axios.get, 'workTime')
        yield put({ type: 'WORK_TIME_SUCCESS', payload: response.data });


    } catch (e) {
        console.log(e.message)
    }
}