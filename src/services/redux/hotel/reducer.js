import * as actionTypes from './actionTypes';
import { updateObject } from '../../../utils/updateObject';
let initState = {
    hotel: {
        hotelID: 0,
        name: '',
        stars: 0,
        url: ''
    },
    hotels: '',
    error: null,
    loading: false
}

const hotelReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_HOTELS_START:
            return updateObject(state, { error: null, loading: true })
        case actionTypes.FETCH_HOTELS_SUCCESS:
            return updateObject(state, { hotels: action.hotels, loading: false })
        case actionTypes.FETCH_HOTELS_FAIL:
            return updateObject(state, { error: action.error, loading: false })
        default:
            return state;
    }

}

export default hotelReducer