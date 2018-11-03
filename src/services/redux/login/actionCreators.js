import { Success, Error } from '../../../components/UI/Toastify/index';
import apiRoutes from '../../apiRequest/routes';
import { post } from '../../apiRequest/apirequest';
import UtilUserData from '../../../config/config';
import { USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_EXPIRED_TOKEN } from './actionTypes';

export const loginStart = () => {
    return {
        type: USER_LOGIN_START
    }
}

export const loginSuccess = (authData, token) => {
    delete authData.$id;
    return {
        type: USER_LOGIN_SUCCESS,
        authData: authData,
        token: token
    }
}

export const loginFail = (error) => {
    return {
        type: USER_LOGIN_FAIL,
        error: error
    }
}

export const logOut = () => {
    return {
        type: USER_LOGOUT
    }
}
export const sessionExpired = () => {
    Error('Tu sesión ha expirado, debes de volver a iniciar sesión');
    UtilUserData.cleanStorage()
    return {
        type: USER_EXPIRED_TOKEN
    }
}
export const login = (userCredential) => {
    return dispatch => {
        dispatch(loginStart())
        post(apiRoutes.login, userCredential)
            .then(response => {
                console.log(response)
                Success('Welcome')
                const user = { ...response.user };
                const token = response.token;
                delete user.password;
                UtilUserData.setUser(user)
                UtilUserData.setToken(token);
                dispatch(loginSuccess(user, token))
            })
            .catch(error => {

                if (error.response)
                    Error(error.response.data.Message)
                else
                    Error('Ha ocurrido un error')
                console.log(error)
                dispatch(loginFail(error))
            })

    }

}