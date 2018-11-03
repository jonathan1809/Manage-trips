import { combineReducers } from 'redux';
import loginReducer from './login/reducer';
import hotelReducer from './hotel/reducer';
import menuActionsReducer from './menuActions/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    hotel: hotelReducer,
    menuActions: menuActionsReducer
})

export default rootReducer;