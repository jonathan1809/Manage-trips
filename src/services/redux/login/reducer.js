import * as actionTypes from './actionTypes'
import { updateObject } from '../../../utils/updateObject';
import UtilUserData from '../../../config/config';
let initState = {
    user: {
        adminID: '',
        image: '',
        typeUser: '00',
    },
    token: '',
    error: null,
    loading: false,
    isLogged: false
}

if (UtilUserData.verifyIsLogged()) {
    initState = {
        ...initState,
        user: { ...UtilUserData.getUser() },
        token: UtilUserData.getToken(),
        isLogged: true
    }
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_START:
            return updateObject(state, { error: null, loading: true })
        case actionTypes.USER_LOGIN_SUCCESS:
            return updateObject(state, { user: action.authData, token: action.token, loading: false, isLogged: true })
        case actionTypes.USER_LOGIN_FAIL:
            return updateObject(state, { error: action.error, loading: false })
        case actionTypes.USER_LOGOUT:
            return updateObject(state, { isLogged: false, token: '', user: { adminID: '', image: '', typeUser: '00', } })
        case actionTypes.USER_EXPIRED_TOKEN:
            return updateObject(state, { isLogged: false })
        default:
            return state;
    }

}

export default loginReducer