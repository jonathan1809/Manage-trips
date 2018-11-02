import { combineReducers } from 'redux';
import loginReducer from './login/reducer';
import hotelReducer from './hotel/reducer';
const rootReducer = combineReducers({
    login: loginReducer,
    hotel: hotelReducer
})

export default rootReducer;