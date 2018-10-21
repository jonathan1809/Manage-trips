import {FETCH_POST_SAVE_USER,FETCH_POST_SAVE_USER_ERROR,FETCH_POST_SAVE_USER_SUCCESS}from '../actionTypes';
import {post} from '../apirequest';
import dispatch from 'redux';

const saveData=(user) => {
    const action = {
        SAVE_USER,
        user
    }

    dispatch(action);
}