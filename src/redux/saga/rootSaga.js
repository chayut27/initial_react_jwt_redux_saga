import { all, takeEvery, takeLatest } from 'redux-saga/effects'
import { LoginSaga } from "./authSaga";
import { EmpSaga } from "./empSaga";
import { OfficeSaga } from "./officeSaga";
import { CompSaga } from "./compSaga";
import { TitleNameSaga } from "./titleNameSaga";
import { GenderSaga } from "./genderSaga";
import { HospitalSaga } from "./hospitalSaga";
import { WorkTimeSaga } from "./workTimeSaga";

function* watchLogin() {
    yield takeEvery("LOGIN_REQ", LoginSaga);
}

function* watchEmp() {
    yield takeEvery("EMP_REQ", EmpSaga);
}


function* watchOffice() {
    yield takeEvery("OFFICE_REQ", OfficeSaga);
}

function* watchComp() {
    yield takeEvery("COMP_REQ", CompSaga);
}

function* watchTitleName() {
    yield takeEvery("TITLE_NAME_REQ", TitleNameSaga);
}

function* watchGender() {
    yield takeEvery("GENDER_REQ", GenderSaga);
}

function* watchHospital() {
    yield takeEvery("HOSPITAL_REQ", HospitalSaga);
}

function* watchWorkTime() {
    yield takeEvery("WORK_TIME_REQ", WorkTimeSaga);
}


export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchEmp(),
        watchOffice(),
        watchComp(),
        watchTitleName(),
        watchGender(),
        watchHospital(),
        watchWorkTime(),
    ])
}