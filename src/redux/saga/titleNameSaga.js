import { call, put, delay } from 'redux-saga/effects'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))
import axios from '../../utils/httpAxios'

export function* TitleNameSaga() {
    try {
        yield put({ type: 'TITLE_NAME_FETCHING' });
        const response = yield call(axios.get, 'title')
        yield put({ type: 'TITLE_NAME_SUCCESS', payload: response.data });


    } catch (e) {
        console.log(e.message)
    }
}