import * as actionTypes from './actionTypes'
import { updateObject } from '../../../utils/updateObject';
let initState = {
    open: false
}

const MenuActionsReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MENU_VIEW:
            return updateObject(state, { open: action.open })
        default:
            return state;
    }

}

export default MenuActionsReducer