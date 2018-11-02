import { Success, Error } from '../../../components/UI/Toastify/index';
import apiRoutes from '../../apiRequest/routes';
import { post, get } from '../../apiRequest/apirequest';
import UtilUserData from '../../../config/config';
import * as actionTypes from './actionTypes';

export const getHotels = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.FETCH_HOTELS_START,
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

                if (error.response)
                    Error(error.response.data.Message)
                else
                    Error('Ha ocurrido un error')
                console.error(error)
                dispatch({
                    type: actionTypes.FETCH_HOTELS_FAIL,
                    error: error
                })
            })

    }

}