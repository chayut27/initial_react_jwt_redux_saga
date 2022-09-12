import { call, put, delay } from 'redux-saga/effects'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))
import axios from '../../utils/httpAxios'

export function* OfficeSaga() {
    try {
        yield put({ type: 'OFFICE_FETCHING' });
        const response = yield call(axios.get, 'office')
        console.log(response)
        yield put({ type: 'OFFICE_SUCCESS', payload: response.data });


    } catch (e) {
        console.log(e.message)
    }
}