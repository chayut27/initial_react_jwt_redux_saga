import { call, put, delay } from 'redux-saga/effects'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))
import axios from '../../utils/httpAxios'

export function* HospitalSaga() {
    try {
        yield put({ type: 'HOSPITAL_FETCHING' });
        const response = yield call(axios.get, 'hospital')
        console.log(response)
        yield put({ type: 'HOSPITAL_SUCCESS', payload: response.data });


    } catch (e) {
        console.log(e.message)
    }
}