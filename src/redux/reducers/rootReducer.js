import authReducer from './authReducer'
import empReducer from './empReducer'
import officeReducer from './officeReducer'
import compReducer from './compReducer'
import titleNameReducer from './titleNameReducer'
import genderReducer from './genderReducer'
import hospitalReducer from './hospitalReducer'
import workTimeReducer from './workTimeReducer'
import { combineReducers } from 'redux'
import { history } from '../../history'


const appReducers = combineReducers({
    authReducer,
    empReducer,
    officeReducer,
    compReducer,
    titleNameReducer,
    genderReducer,
    hospitalReducer,
    workTimeReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        localStorage.clear()
        state = undefined
        history.replace('./login')
    }

    return appReducers(state, action)
}

export default rootReducer