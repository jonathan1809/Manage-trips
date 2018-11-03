import * as actionTypes from './actionTypes';
import { updateObject } from '../../../utils/updateObject';
let initState = {
    hotel: {
        hotelID: 0,
        name: '',
        stars: 0,
        url: ''
    },
    hotels: [],
    error: null,
    loading: false,
    hotelID: 0
}

const hotelReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_HOTEL_START:
            return updateObject(state, { error: null, loading: true })
        case actionTypes.FETCH_HOTELS_SUCCESS:
            return updateObject(state, { hotels: action.hotels, loading: false })
        case actionTypes.REQUEST_HOTEL_FAIL:
            return updateObject(state, { error: action.error, loading: false })
        case actionTypes.STORE_HOTEL_ID:
            return updateObject(state, { hotelID: action.hotelID })
        default:
            return state;
    }

}

export default hotelReducer