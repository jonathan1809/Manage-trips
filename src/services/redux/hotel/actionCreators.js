import { Success, Error } from '../../../components/UI/Toastify/index';
import apiRoutes from '../../apiRequest/routes';
import { post, get } from '../../apiRequest/apirequest';
import * as actionTypes from './actionTypes';
import { sessionExpired } from '../login'

export const getHotels = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.REQUEST_HOTEL_START,
            loading: true
        })
        get(apiRoutes.hotel)
            .then(response => {
                Success('Welcome')
                const hotels = [...response.$values]
                dispatch({
                    type: actionTypes.FETCH_HOTELS_SUCCESS,
                    hotels: hotels,
                    loading: false
                })
            })
            .catch(error => {

                if (error === 401) {
                    dispatch(sessionExpired())
                }
                if (error.response)
                    Error(error.response.data.Message)
                else
                    Error('Ha ocurrido un error')
                dispatch({
                    type: actionTypes.REQUEST_HOTEL_FAIL,
                    error: error
                })
            })

    }

}