import * as actionTypes from './actions'
const initState = {
    user: {}
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.STORE_USER_DATA:        
            return {
                ...state,
                user: { ...action.payload }
            }
    }
    return state;
}

export default loginReducer