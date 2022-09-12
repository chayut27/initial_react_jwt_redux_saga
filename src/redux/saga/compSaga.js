import { call, put, delay } from 'redux-saga/effects'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))
import axios from '../../utils/httpAxios'

export function* CompSaga() {
    try {
        yield put({ type: 'COMP_FETCHING' });
        const response = yield call(axios.get, 'comp')
        console.log(response)
        yield put({ type: 'COMP_SUCCESS', payload: response.data });


    } catch (e) {
        console.log(e.message)
    }
}